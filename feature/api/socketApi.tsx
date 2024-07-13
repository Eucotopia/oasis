import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {baseUrl} from "@/feature/api/authApi";
import {RootState} from "@/app/store";

export type Channel = 'redux' | 'general'

export interface Message {
    id: number
    channel: Channel
    username: string
    text: string
}

export const socketApi = createApi({
    reducerPath: 'socketApi',
    tagTypes: ['Socket'],
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
        prepareHeaders: (headers, {getState}) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const authorization = (getState() as RootState).auth.currentUser?.authorization
            if (authorization) {
                headers.set('Authorization', `Bearer ${authorization}`)
            }
            return headers
        },
    }),
    endpoints: (build) => ({
        getMessage: build.query<Message[], Channel>({
            query: (channel) => `message/${channel}`,
            async onCacheEntryAdded(
                arg,
                { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
            ){
                // create a websocket connection when the cache subscription starts
                const ws = new WebSocket('ws://localhost:8080')
                try {
                    // wait for the initial query to resolve before proceeding
                    await cacheDataLoaded
                    // when data is received from the socket connection to the server,
                    // if it is a message and for the appropriate channel,
                    // update our query result with the received message
                    const listener = (event: MessageEvent) => {
                        const data = JSON.parse(event.data)
                        // 待定
                        // if (!isMessage(data) || data.channel !== arg) return

                        updateCachedData((draft) => {
                            draft.push(data)
                        })
                    }
                    ws.addEventListener('message', listener)
                }catch {
                    // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
                    // in which case `cacheDataLoaded` will throw
                }
                // cacheEntryRemoved will resolve when the cache subscription is no longer active
                await cacheEntryRemoved
                // perform cleanup steps once the `cacheEntryRemoved` promise resolves
                ws.close()
            }
        })
    })
})

export const {useGetMessageQuery} = socketApi
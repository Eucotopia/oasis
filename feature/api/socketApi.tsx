import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RootState} from "@/app/store";
import {baseUrl} from "@/feature/api/authApi";
import {createEntityAdapter} from "@reduxjs/toolkit";
import type {EntityState} from '@reduxjs/toolkit'
import {ResultResponse} from "@/types";

export type Channel = 'redux' | 'general' | 'admin_notification'

export interface MessageType {
    type?: string
    content: any
    from?: string
    to?: string
    channel?: Channel
}

const messagesAdapter = createEntityAdapter<MessageType>({
    selectId: (message) => message.content.id
});

export const socketApi = createApi({
    reducerPath: 'socketApi',
    tagTypes: ['Socket'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}/`,
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
        getMessages: build.query<EntityState<MessageType>, MessageType>({
            query: (message) => ({
                url: 'socket/getUnapprovedUsers',
                method: 'POST',
                body: message,
            }),
            transformResponse(response: ResultResponse<MessageType[]>) {
                return messagesAdapter.addMany(
                    messagesAdapter.getInitialState(),
                    response.data.map(message => ({
                        ...message,
                        content: JSON.parse(message.content)  // 确保 content 是对象
                    }))
                )
            },
            async onCacheEntryAdded(
                arg,
                {updateCachedData, cacheDataLoaded, cacheEntryRemoved}
            ) {
                // 相当于说，将 socket 拿到的数据放到 messagesAdapter
                // create a websocket connection when the cache subscription starts
                const ws = new WebSocket(`ws://localhost:8080/websocket/${arg.from}`)
                console.log(arg.from)
                try {
                    // wait for the initial query to resolve before proceeding
                    await cacheDataLoaded
                    // when data is received from the socket connection to the server,
                    // if it is a message and for the appropriate channel,
                    // update our query result with the received message
                    const listener = (event: MessageEvent) => {
                        console.log(event.data)
                        const data: MessageType[] = JSON.parse(event.data)
                        // 待定
                        // if (!isMessage(data) || data.channel !== arg) return

                        console.log("data", data)

                        updateCachedData((draft) => {
                            messagesAdapter.upsertMany(draft, data.map(message => ({
                                ...message,
                                content: JSON.parse(message.content)
                            })))
                        });
                    }

                    ws.addEventListener('message', listener)

                    ws.addEventListener('open', () => {
                        console.log('WebSocket connected');
                    });

                } catch {
                    // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
                    // in which case `cacheDataLoaded` will throw
                }
                // cacheEntryRemoved will resolve when the cache subscription is no longer active
                await cacheEntryRemoved
                // perform cleanup steps once the `cacheEntryRemoved` promise resolves
                ws.close()
            },
            transformErrorResponse: (
                response: {
                    status: string | number,
                },
                meta,
                arg
            ) => {
                if (response.status === 400) {
                    alert(`请求错误: ${response.status}`)
                } else if (response.status === 500) { // 假设 500 表示服务器错误
                    alert('服务器错误，请稍后再试。');
                } else {
                    alert(`未知错误: ${response.status}`);
                }
                // return response.status;
            },
        })
    })
})

export const {useGetMessagesQuery} = socketApi
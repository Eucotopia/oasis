import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {baseUrl} from "@/feature/api/authApi";

export type roleType = {
    id: number,
    name: string
}
export const roleApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}/role`,
        prepareHeaders: (headers, {getState}) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const authorization = (getState() as RootState).auth.currentUser?.authorization
            if (authorization) {
                headers.set('Authorization', `Bearer ${authorization}`)
            }
            return headers
        },
    }),
    reducerPath: 'roleApi',
    tagTypes: ['Role'],
    endpoints: (build) => ({})
})
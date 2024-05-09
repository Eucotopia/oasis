import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {ResultResponse} from "@/types";
import {baseUrl} from "@/feature/api/authApi";


export const fileApi = createApi({
    reducerPath: 'fileApi',
    tagTypes: ['FileApi'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}/`,
        prepareHeaders: (headers, {getState}) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = (getState() as RootState).auth.currentUser?.authorization
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        // The query accepts a FormData and returns a ResultResponse<string> type ✔
        upload: builder.mutation<string, FormData>({
            query: (image) => ({
                url: 'image/upload',
                method: 'POST',
                body: image,
            }),
            transformResponse: (response: ResultResponse<string>, meta, arg) => {
                return response.data
            },
        }),
    }),
})

export const {useUploadMutation} = fileApi

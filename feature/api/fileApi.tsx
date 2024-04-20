import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {ResultResponse} from "@/types";


export const fileApi = createApi({
    reducerPath: 'fileApi',
    tagTypes: ['FileApi'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/',
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
        upload: builder.mutation<ResultResponse<string>, FormData>({
            query: (image) => ({
                url: 'image/upload',
                method: 'POST',
                body: image,
            }),
        }),
    }),
})

export const {useUploadMutation} = fileApi

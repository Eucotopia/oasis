import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {ResultResponse} from "@/types";

type Post = {
    id: number
    title: string
    content: string
}
export type PostType = {
    title: string
    content: string
    tags: string[]
    summary: string
    isTop: boolean,
    rating: string,
    cover: string,
    categoryId: string,
    isPrivate: boolean,
    columnId: number
}
export const postApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/post',
        prepareHeaders: (headers, {getState}) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const authorization = (getState() as RootState).auth.currentUser?.authorization
            if (authorization) {
                headers.set('Authorization', `Bearer ${authorization}`)
            }
            return headers
        },
    }),
    reducerPath: 'postApi',
    tagTypes: ['Post'],
    endpoints: (build) => ({
        // The query accepts a number and returns a ResultResponse<Post> type
        getPost: build.query<ResultResponse<Post>, number>({
            // note: an optional `queryFn` may be used in place of `query`
            query: (id) => ({url: `${id}`}),
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: ResultResponse<Post> }, meta, arg) => response.data,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            providesTags: (result, error, id) => [{type: 'Post', id}],
            // The 2nd parameter is the destructured `QueryLifecycleApi`
            async onQueryStarted(
                arg,
                {
                    dispatch,
                    getState,
                    extra,
                    requestId,
                    queryFulfilled,
                    getCacheEntry,
                    updateCachedData,
                }
            ) {

            },
            // The 2nd parameter is the destructured `QueryCacheLifecycleApi`
            async onCacheEntryAdded(
                arg,
                {
                    dispatch,
                    getState,
                    extra,
                    requestId,
                    cacheEntryRemoved,
                    cacheDataLoaded,
                    getCacheEntry,
                    updateCachedData,
                }
            ) {
            },
        }),
        addPost: build.mutation<ResultResponse<String>, PostType>({
            query: (post) => ({
                url: ``,
                method: 'POST',
                body: post
            }),
        })
    }),
})
export const {useGetPostQuery,useAddPostMutation} = postApi

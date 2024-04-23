import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {PageType, ResultResponse} from "@/types";
import {TagType} from "@/feature/api/tagApi";


export type PostType = {
    id?: number
    userId?: number
    title: string
    content: string
    tags: TagType[]
    summary: string
    isTop: boolean
    rating: string
    cover: string
    categoryId: string
    isPrivate: boolean
    createTime?: Date
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
    tagTypes: ['Posts'],
    endpoints: (build) => ({
        // The query accepts a number and returns a ResultResponse<Post> type
        getPost: build.query<ResultResponse<PostType>, number>({
            // note: an optional `queryFn` may be used in place of `query`
            query: (id) => ({url: `${id}`}),
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: { data: ResultResponse<PostType> }, meta, arg) => response.data,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            providesTags: (result, error, id) => [{type: 'Posts', id}],
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
            invalidatesTags: [{type: 'Posts', id: 'LIST'}],
        }),
        getPosts: build.query<ResultResponse<PostType[]>, PageType>({
            query: (page) => `/${page.current}/${page.pageSize}`,
            providesTags: (result) =>
                result ? [...result.data.map(({id}) => ({type: "Posts", id} as const)), {
                    type: "Posts",
                    id: "LIST"
                }] : [{type: "Posts", id: "LIST"}],
        }),
        updatePost: build.mutation<ResultResponse<String>, PostType>({
            query: (post) => ({
                url: `${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: (result, error, {id}) => [{type: "Posts", id}]
        }),
        deletePost: build.mutation<ResultResponse<String>, number>({
            query: (id) => ({
                url: `${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [{type: "Posts", id}]
        }),
        getHostPosts: build.query<ResultResponse<PostType[]>, void>({
            query: () => ({url: "/hot"}),
            transformResponse: (response: { data: ResultResponse<PostType[]> }, meta, arg) => response.data,
        })
    }),
})
export const {useGetPostQuery, useAddPostMutation, useGetPostsQuery, useGetHostPostsQuery} = postApi

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {PageType, ResultResponse} from "@/types";
import {TagType} from "@/feature/api/tagApi";
import {CategoryType} from "@/feature/api/categoryApi";
import {ColumnType} from "@/feature/api/columnApi";


export type PostType = {
    id?: number
    userId?: number
    title: string
    content: string
    tags: TagType[]
    summary: string
    isTop: boolean
    rating: string
    comments?: number
    views?: number
    cover: string
    categories: CategoryType[]
    isPrivate: boolean
    createTime?: Date
    columns: ColumnType[]
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
        getPost: build.query<PostType, number>({
            // note: an optional `queryFn` may be used in place of `query`
            query: (id) => ({url: `${id}`}),
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: ResultResponse<PostType> , meta, arg) => response.data,
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
        getPosts: build.query<PostType[], PageType>({
            query: (page) => `/${page.current}/${page.pageSize}`,
            transformResponse: (response: ResultResponse<PostType[]>) => response.data,
            providesTags: (result , error, arg) =>
                result ? [...result?.map((post) => ({type: "Posts", id: String(post.id)} as const))] : [{
                    type: "Posts",
                    id: "LIST"
                }],
        }),
        updatePost: build.mutation<ResultResponse<String>, PostType>({
            query: (post) => ({
                url: ``,
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
        getHostPosts: build.query<PostType[], void>({
            query: () => ({url: "/hot"}),
            transformResponse: (response:  ResultResponse<PostType[]> , meta, arg) => response.data,
            providesTags: (result , error, arg) =>
                result ? [...result?.map((post) => ({type: "Posts", id: String(post.id)} as const))] : [{
                    type: "Posts",
                    id: "LIST"
                }],
        })
    }),
})
export const {
    useGetPostQuery,
    useAddPostMutation,
    useGetPostsQuery,
    useGetHostPostsQuery,
    useUpdatePostMutation
} = postApi

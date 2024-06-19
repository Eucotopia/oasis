import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {PageType, ResultResponse} from "@/types";
import {TagType} from "@/feature/api/tagApi";
import {CategoryType} from "@/feature/api/categoryApi";
import {ColumnType} from "@/feature/api/columnApi";
import {baseUrl, UserType} from "@/feature/api/authApi";
import {build} from "@react-native-community/cli-platform-android/build/commands/buildAndroid";


export type PostType = {
    id?: number
    userId?: number
    title: string
    content: string
    tags?: TagType[]
    summary: string
    isTop: boolean
    rating: string
    comments?: number
    views?: number
    status: boolean
    cover: string
    user: UserType
    categories: CategoryType[]
    isPrivate: boolean
    createTime?: string
    columns?: ColumnType[]
}
export const postApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}/post`,
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
    keepUnusedDataFor: 30,
    endpoints: (builder) => ({
        // The query accepts a number and returns a ResultResponse<Post> type ✔
        getPost: builder.query<PostType, number>({
            // note: an optional `queryFn` may be used in place of `query`
            query: (id) => ({url: `${id}`}),
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: ResultResponse<PostType>, meta, arg) => response.data,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
                response: {
                    status: string | number
                },
                meta,
                arg
            ) => response.status,
            providesTags: (result, error, id) => [{type: 'Post', id: String(id)}]
        }),
        addPost: builder.mutation<ResultResponse<String>, PostType>({
            query: (post) => ({
                url: ``,
                method: 'POST',
                body: post
            }),
            invalidatesTags: [{type: 'Post', id: 'LIST'}],
        }),
        // The query accepts a number and returns a ResultResponse<Post> type ✔
        getPostsByPage: builder.query<PostType[], PageType>({
            query: (page) => `/${page.current}/${page.pageSize}`,
            transformResponse: (response: ResultResponse<PostType[]>) => response.data,
            providesTags: (result, error, arg) =>
                result ? [...result.map((post) => ({type: "Post" as const, id: String(post.id)})), {
                    type: "Post",
                    id: "LIST"
                }] : [{
                    type: "Post",
                    id: "LIST"
                }],
        }),
        getPosts: builder.query<PostType[], void>({
            query: () => ``,
            transformResponse: (response: ResultResponse<PostType[]>, meta, arg) => response.data,
            providesTags: (result, error, arg) =>
                result ? [...result.map((post) => ({type: "Post" as const, id: String(post.id)})), {
                    type: "Post",
                    id: "LIST"
                }] : [{
                    type: "Post",
                    id: "LIST"
                }],
        }),
        // The query accepts a number and returns a ResultResponse<Post> type ✔
        updatePost: builder.mutation<ResultResponse<String>, PostType>({
            query: (post) => ({
                url: ``,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: (result, error, {id}) => {
                return [{type: "Post", id: String(id)}]
            }
        }),
        // The query accepts a number and returns a ResultResponse<Post> type ✔
        deletePost: builder.mutation<ResultResponse<String>, number>({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => {
                return [{type: "Post", id: String(id)}]
            }
        }),
        // The query accepts a number and returns a ResultResponse<Post> type ✔
        getHotPosts: builder.query<PostType[], void>({
            query: () => ({url: "/hot"}),
            transformResponse: (response: ResultResponse<PostType[]>, meta, arg) => response.data,
            providesTags: (result, error, arg) =>
                result ? [...result?.map((post) => ({type: "Post" as const, id: String(post.id)}))] : [{
                    type: "Post",
                    id: "LIST"
                }],
        }),
        getPostCount: builder.query<number, void>({
            query: () => ({url: "/count"}),
            transformResponse: (response: ResultResponse<number>, meta, arg) => response.data,
        }),
        getRecentPosts: builder.query<PostType[], void>({
            query: () => ({url: "/recent"}),
            transformResponse: (response: ResultResponse<PostType[]>, meta, arg) => response.data,
            providesTags: (result, error, arg) =>
                result ? [...result?.map((post) => ({type: "Post" as const, id: String(post.id)}))] : [{
                    type: "Post",
                    id: "LIST"
                }],
        })
    }),
})
export const {
    useGetPostQuery,
    useAddPostMutation,
    useGetPostCountQuery,
    useGetPostsByPageQuery,
    useGetPostsQuery,
    useGetHotPostsQuery,
    useGetRecentPostsQuery,
    useLazyGetHotPostsQuery,
    useUpdatePostMutation,
    useDeletePostMutation
} = postApi

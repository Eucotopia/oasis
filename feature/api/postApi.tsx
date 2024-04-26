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
    tags?: TagType[]
    summary: string
    isTop: boolean
    rating: string
    comments?: number
    views?: number
    cover: string
    categories: CategoryType[]
    isPrivate: boolean
    createTime?: Date
    columns?: ColumnType[]
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
        // The query accepts a number and returns a ResultResponse<Post> type ✔
        getPost: build.query<PostType, number>({
            // note: an optional `queryFn` may be used in place of `query`
            query: (id) => ({url: `${id}`}),
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: ResultResponse<PostType>, meta, arg) => response.data,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
            providesTags: (result, error, id) => [{type: 'Post', id: String(id)}]
        }),
        addPost: build.mutation<ResultResponse<String>, PostType>({
            query: (post) => ({
                url: ``,
                method: 'POST',
                body: post
            }),
            invalidatesTags: [{type: 'Post', id: 'LIST'}],
        }),
        // The query accepts a number and returns a ResultResponse<Post> type ✔
        getPosts: build.query<PostType[], PageType>({
            query: (page) => `/${page.current}/${page.pageSize}`,
            transformResponse: (response: ResultResponse<PostType[]>) => response.data,
            providesTags: (result, error, arg) =>
                result ? [...result.map((post) => ({type: "Post" as const, id: String(post.id)}))] : [{
                    type: "Post",
                    id: "LIST"
                }],
        }),
        // The query accepts a number and returns a ResultResponse<Post> type ✔
        updatePost: build.mutation<ResultResponse<String>, PostType>({
            query: (post) => ({
                url: ``,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: (result, error, {id}) => [{type: "Post", id}]
        }),
        // The query accepts a number and returns a ResultResponse<Post> type ✔
        deletePost: build.mutation<ResultResponse<String>, number>({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => {
                console.log("deletePost", id);
                return [{type: "Post", id: String(id)}]
            }
        }),
        // The query accepts a number and returns a ResultResponse<Post> type ✔
        getHostPosts: build.query<PostType[], void>({
            query: () => ({url: "/hot"}),
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
    useGetPostsQuery,
    useGetHostPostsQuery,
    useUpdatePostMutation,
    useDeletePostMutation
} = postApi

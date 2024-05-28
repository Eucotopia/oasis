import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {baseUrl} from "@/feature/api/authApi";
import {ResultResponse} from "@/types";
import {PostType} from "@/feature/api/postApi";

export type BlogRollType = {
    id?: number
    title: string
    description: string
    link: string
    avatar: string
    status: number
    level: number
}
export const blogRollApi = createApi({
    reducerPath: 'blogrollApi',
    tagTypes: ['BlogRoll'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}/friendLink`,
        prepareHeaders: (headers, {getState}) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const authorization = (getState() as RootState).auth.currentUser?.authorization
            if (authorization) {
                headers.set('Authorization', `Bearer ${authorization}`)
            }
            return headers
        },
    }),
    endpoints: (buildr) => ({
        addBlogRoll: buildr.mutation<string, BlogRollType>({
            query: (blogRoll) => ({
                url: ``,
                method: 'POST',
                body: blogRoll,
            }),
            transformErrorResponse: (
                response: {
                    status: string | number,
                },
                meta,
                arg
            ) => {
                response.status
            },
            transformResponse: (response: ResultResponse<string>, meta, arg) => response.data,
            invalidatesTags: [{type: 'BlogRoll', id: 'LIST'}],
        }),
        getBlogRolls: buildr.query<BlogRollType[], void>({
            query: () => ({
                url: ``,
                method: 'GET',
            }),
            transformResponse: (response: ResultResponse<BlogRollType[]>) => response.data,
            providesTags: (result, error, arg) =>
                result ? [...result.map((blogroll) => ({
                    type: "BlogRoll" as const,
                    id: String(blogroll.id)
                })), {type: "BlogRoll", id: "LIST"}] : [{
                    type: "BlogRoll",
                    id: "LIST"
                }],
        }),
        getRecommendedBlogRolls: buildr.query<BlogRollType[], void>({
            query: () => ({
                url: "/recommend",
                method: 'GET',
            }),
            transformResponse: (response: ResultResponse<BlogRollType[]>) => response.data,
            providesTags: (result, error, arg) =>
                result ? [...result.map((blogroll) => ({
                    type: "BlogRoll" as const,
                    id: String(blogroll.id)
                })), {type: "BlogRoll", id: "LIST"}] : [{
                    type: "BlogRoll",
                    id: "LIST"
                }]
        }),
        getHighQualityBlogRolls: buildr.query<BlogRollType[], void>({
            query: () => ({
                url: "/highQuality",
                method: 'GET',
            }),
            transformResponse: (response: ResultResponse<BlogRollType[]>) => response.data,
            providesTags: (result, error, arg) =>
                result ? [...result.map((blogroll) => ({
                    type: "BlogRoll" as const,
                    id: String(blogroll.id)
                })), {type: "BlogRoll", id: "LIST"}] : [{
                    type: "BlogRoll",
                    id: "LIST"
                }]
        })
    }),
})
export const {
    useAddBlogRollMutation,
    useGetBlogRollsQuery,
    useGetRecommendedBlogRollsQuery,
    useGetHighQualityBlogRollsQuery
} = blogRollApi
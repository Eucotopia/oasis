import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ResultResponse} from '@/types'
import {RootState} from "@/app/store";
import {baseUrl} from "@/feature/api/authApi";

export type CategoryType = {
    id: number
    name: string
    parentId: number
}

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    tagTypes: ['Category'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}/category`,
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
        getCount: builder.query<ResultResponse<number>, void>({
            query: () => ({url: '/count'}),
        }),
        getCategories: builder.query<CategoryType[], void>({
            query: () => ({url: ''}),
            transformResponse: (response: ResultResponse<CategoryType[]>) => response.data,
            transformErrorResponse: (response: { status: string | number }) => response.status,
            providesTags: (result, error, arg) =>
                result ? [...result.map((post) => ({type: "Category" as const, id: post.id}))] : [{
                    type: "Category",
                    id: "LIST"
                }],
        }),
        getRootCategories: builder.query<ResultResponse<CategoryType[]>, void>({
            query: () => ({url: '/root'}),
        }),
        getCategoryCount: builder.query<number, void>({
            query: () => ({url: '/count'}),
            transformResponse: (response: ResultResponse<number>) => response.data,
        })
    }),
})

export const {useGetCountQuery, useGetCategoriesQuery, useGetRootCategoriesQuery,useGetCategoryCountQuery} = categoryApi

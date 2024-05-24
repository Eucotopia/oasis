import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ResultResponse} from '@/types'
import {RootState} from "@/app/store";
import {PostType} from "@/feature/api/postApi";
import {baseUrl} from "@/feature/api/authApi";

export type ColumnType = {
    id?: number,
    name: string,
    description: string,
    avatar: string,
    rating: number,
    posts?: PostType[],
}
export const columnApi = createApi({
    reducerPath: 'columnApi',
    tagTypes: ['Column'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}/column`,
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
        getColumn: builder.query<ColumnType, number>({
            query: (id) => ({url: `/${id}`}),
            transformResponse: (response: ResultResponse<ColumnType>, meta, arg) => response.data,
            providesTags: (result, error, id) => [{type: 'Column', id: String(id)}]
        }),
        getColumns: builder.query<ColumnType[], void>({
            query: () => ({url: ''}),
            transformResponse: (response: ResultResponse<ColumnType[]>, meta, arg) => response.data,
            providesTags: (result, error, arg) =>
                result ? [...result.map((column) => ({type: "Column" as const, id: String(column.id)})), {
                    type: "Column",
                    id: "LIST"
                }] : [{
                    type: "Column",
                    id: "LIST"
                }],
        }),
        getHotColumns: builder.query<ColumnType[], void>({
            query: () => ({url: '/hot'}),
            transformResponse: (response: ResultResponse<ColumnType[]>, meta, arg) => response.data,
            providesTags: (result, error, arg) =>
                result ? [...result.map((column) => ({type: "Column" as const, id: String(column.id)}))] : [{
                    type: "Column",
                    id: "LIST"
                }],

        }),
        addColumn: builder.mutation<ResultResponse<string>, ColumnType>({
            query: (column) => ({
                url: '',
                method: 'POST',
                body: column
            }),
            invalidatesTags: (result, error, id) => {
                return [{type: "Column", id: String(id)}]
            }
        }),
        getColumnCount: builder.query<number, void>({
            query: () => ({url: '/count'}),
            transformResponse: (response: ResultResponse<number>, meta, arg) => response.data,
        })
    }),
})

export const {useGetColumnsQuery, useGetHotColumnsQuery, useAddColumnMutation,useGetColumnCountQuery} = columnApi

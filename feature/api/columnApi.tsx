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
    tagTypes: ['ColumnApi'],
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
        getColumnById: builder.query<ResultResponse<ColumnType>, number>({
            query: (id) => ({url: `/${id}`}),
        }),
        getColumns: builder.query<ColumnType[], void>({
            query: () => ({url: ''}),
            transformResponse: (response: ResultResponse<ColumnType[]>, meta, arg) => response.data,
        }),
        getHotColumns: builder.query<ResultResponse<ColumnType[]>, void>({
            query: () => ({url: '/hot'})
        }),
        addColumn: builder.mutation<ResultResponse<string>, ColumnType>({
            query: (column) => ({
                url: '',
                method: 'POST',
                body: column
            })
        })
    }),
})

export const {useGetColumnByIdQuery, useGetColumnsQuery, useGetHotColumnsQuery,useAddColumnMutation} = columnApi

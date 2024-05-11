import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {ResultResponse} from "@/types";
import {currentUserType} from "@/feature/auth/authSlice";

export type UserLoginType = {
    email: string
    password: string
}
export type UserType = {
    id: number,
    username: string,
    email: string,
    password: string,
    motto: string,
    createTime: string,
    avatar: string,
    role: string,
    age: number,
    address: string,
    status: string
}
export const baseUrl = 'http://120.25.191.26/api';
export const authApi = createApi({
    reducerPath: 'authApi',
    tagTypes: ['Auth'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}/user`,
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
        userLogin: buildr.mutation<currentUserType, UserLoginType>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
            transformResponse: (response: ResultResponse<currentUserType>, meta, arg) => {
                return response.data
            },
            transformErrorResponse: (
                response: {
                    status: string | number,
                },
                meta,
                arg
            ) => {
                response.status
            },
        }),
        getUsers: buildr.query<UserType[], void>({
            query: () => ({url: ''}),
            transformResponse: (response: ResultResponse<UserType[]>, meta, arg) => response.data,
            transformErrorResponse: (
                response: {
                    status: string | number,
                },
                meta,
                arg
            ) => {
                response.status
            },
        }),
    }),
})
export const {useUserLoginMutation, useGetUsersQuery} = authApi
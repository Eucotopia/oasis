import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {ResultResponse} from "@/types";
import {currentUserType} from "@/feature/auth/authSlice";
import {roleType} from "@/feature/api/roleApi";

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
    views: string,
    createTime: number,
    avatar: string,
    roles: roleType[],
    age: number,
    address: string,
    status: number
}
export const baseUrl1 = 'http://localhost:8080';
export const baseUrl = 'http://47.119.161.226/api';
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
                if (response.code === 200) {
                    alert('Login successful')
                    return response.data;
                } else {
                    alert(`Login failed: ${response.message}`)
                    throw new Error(response.message);
                }
            },
            transformErrorResponse: (
                response: {
                    status: string | number,
                },
                meta,
                arg
            ) => {
                if (response.status === 400) {
                    alert(`请求错误: ${response.status}`)
                } else if (response.status === 500) { // 假设 500 表示服务器错误
                    alert('服务器错误，请稍后再试。');
                } else {
                    alert(`未知错误: ${response.status}`);
                }
                // return response.status;
            },
        }),
        userRegister: buildr.mutation<number, UserLoginType>({
            query: (credentials) => ({
                url: '',
                method: 'POST',
                body: credentials,
            }),
            transformResponse: (response: ResultResponse<null>, meta, arg) => {
                if (response.code === 200) {
                    alert(response.message)
                    return response.code;
                } else {
                    alert(`register failed: ${response.message}`)
                    throw new Error(response.message);
                }
            },
            transformErrorResponse: (
                response: {
                    status: string | number,
                },
                meta,
                arg
            ) => {
                if (response.status === 400) {
                    alert(`请求错误: ${response.status}`)
                } else if (response.status === 500) { // 假设 500 表示服务器错误
                    alert('服务器错误，请稍后再试。');
                } else {
                    alert(`未知错误: ${response.status}`);
                }
                // return response.status;
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
        getUserCount: buildr.query<number, void>({
            query: () => ({url: '/count'}),
            transformResponse: (response: ResultResponse<number>, meta, arg) => response.data,
        })
    }),
})
export const {useUserLoginMutation, useUserRegisterMutation, useGetUsersQuery, useGetUserCountQuery} = authApi

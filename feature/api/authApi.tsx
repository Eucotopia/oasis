import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {ResultResponse} from "@/types";
import {currentUserType, setCredentials} from "@/feature/auth/authSlice";
import {roleType} from "@/feature/api/roleApi";

export type UserLoginType = {
    email: string
    password: string
    verifyCode?: string
}
export type UserType = {
    id: string,
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
export const baseUrl = 'http://localhost:8080';
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
        // The query accepts a number and returns a ResultResponse<Post> type ✔
        getUser: buildr.query<UserType, string>({
            // note: an optional `queryFn` may be used in place of `query`
            query: (id) => ({url: `${id}`}),
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response: ResultResponse<UserType>, meta, arg) => response.data,
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (
                response: {
                    status: string | number
                },
                meta,
                arg
            ) => response.status,
            providesTags: (result, error, id) => [{type: 'Auth', id: String(id)}]
        }),
        userLogin: buildr.mutation<currentUserType, UserLoginType>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
            transformResponse: (response: ResultResponse<currentUserType>, meta, arg) => {
                if (response.code === 2002) {
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
                } else if (response.status === 500) {
                    alert('服务器错误，请稍后再试。');
                } else {
                    alert(`未知错误: ${response.status}`);
                }
                // return response.status;
            },
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    // 请求发出前的操作，可以做一些更新 UI 的操作
                    // ......
                    // 等待查询结果
                    const {data} = await queryFulfilled;
                    dispatch(setCredentials({...data, isSelectRemember: true}));
                } catch (error) {

                }
            },
        }),
        userRegister: buildr.mutation<number, UserLoginType>({
            query: (credentials) => ({
                url: '',
                method: 'POST',
                body: credentials,
            }),
            transformResponse: (response: ResultResponse<null>, meta, arg) => {
                if (response.code === 2001) {
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
        }),
        getVerifyCodeByEmail: buildr.query<ResultResponse<string>, string>({
            query: (email) => ({
                url: `/getVerifyCode/${email}`,
                method: 'POST',
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
        }),
        verifyCode: buildr.query<boolean, UserLoginType>({
            query: (credentials) => ({
                url: '/verifyCode',
                method: 'POST',
                body: credentials,
            }),
            transformResponse: (response: ResultResponse<boolean>, meta, arg) => response.data,
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
        resetPassword: buildr.query<ResultResponse<string>, UserLoginType>({
            query: (credentials) => ({
                url: '/resetPassword',
                method: 'POST',
                body: credentials,
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
        })
    }),
})
export const {
    useUserLoginMutation,
    useUserRegisterMutation,
    useLazyVerifyCodeQuery,
    useGetUsersQuery,
    useLazyGetVerifyCodeByEmailQuery,
    useLazyResetPasswordQuery,
    useGetUserQuery,
    useLazyGetUserQuery
} = authApi

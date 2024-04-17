import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {ResultResponse} from "@/types";
import {currentUserType} from "@/feature/auth/authSlice";

export type UserLoginType = {
    email: string
    password: string
}
export const authApi = createApi({
    reducerPath: 'authApi',
    tagTypes: ['Auth'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/user/',
        prepareHeaders: (headers, {getState}) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const authorization = (getState() as RootState).auth.currentUser?.authorization
            if (authorization) {
                headers.set('Authorization', `Bearer ${authorization}`)
            }
            return headers
        },
    }),
    endpoints: (build) => ({
        userLogin: build.mutation<ResultResponse<currentUserType>, UserLoginType>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
            transformResponse: (response: {
                data: ResultResponse<currentUserType>,
            }, meta, arg) => response.data,
            transformErrorResponse: (
                response: {
                    status: string | number
                },
                meta,
                arg
            ) => response.status,
        })
    }),
})
export const {useUserLoginMutation} = authApi
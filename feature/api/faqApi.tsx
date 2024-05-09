import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {ResultResponse} from "@/types";
import {baseUrl} from "@/feature/api/authApi";

type FaqType = {
    id?: number,
    question: string,
    answer?: string,
}
export const faqApi = createApi({
    reducerPath: 'faqApi',
    tagTypes: ['Faq'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}/faq`,
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
        addFaq: build.mutation<ResultResponse<string>, FaqType>({
            query: (faq) => ({
                url: ``,
                method: 'POST',
                body: faq,
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
        getFaqs: build.query<FaqType[], void>({
            query: () => ({
                url: ``,
                method: 'GET',
            }),
            transformResponse: (response: ResultResponse<FaqType[]>, meta, arg) => {
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
        getFaqsByAnswer: build.query<FaqType[], void>({
            query: () => ({
                url: "/isAnswer",
                method: 'GET',
            }),
            transformResponse: (response: ResultResponse<FaqType[]>, meta, arg) => {
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
    }),
})
export const {useAddFaqMutation, useGetFaqsQuery,useGetFaqsByAnswerQuery} = faqApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {baseUrl} from "@/feature/api/authApi";
import {ResultResponse} from "@/types";
import {handleTransformErrorResponse} from "@/util/apiHelpers";
import {currentUserType} from "@/feature/auth/authSlice";

export type CommentType = {
    user?: currentUserType,
    date?: string,
    title: string,
    content: string,
    username: string,
    email: string,
    postId: number,
    rating: number,
    parentId: string
}
export const commentApi = createApi({
    reducerPath: 'commentApi',
    tagTypes: ['Comment'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}/comment`,
        prepareHeaders: (headers, {getState}) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const authorization = (getState() as RootState).auth.currentUser?.authorization
            if (authorization) {
                headers.set('Authorization', `Bearer ${authorization}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        addComment: builder.mutation<string, CommentType>({
            query: (comment) => ({
                url: ``,
                method: 'POST',
                body: comment
            }),
            transformResponse: (response: ResultResponse<string>, meta, arg) => {
                if (response.code === 200) {
                    alert('add successful')
                    return response.data;
                } else {
                    alert(`add failed: ${response.message}`)
                    throw new Error(response.message);
                }
            },
            transformErrorResponse: handleTransformErrorResponse,
            invalidatesTags: (result, error, comment) => {
                return [{type: "Comment", id: comment.postId}]
            }
        }),
        getComments: builder.query<CommentType[], number>({
            query: (id) => ({url: `${id}`}),
            transformResponse: (response: ResultResponse<CommentType[]>, meta, arg) => response.data,
            transformErrorResponse: (
                response: {
                    status: string | number
                },
                meta,
                arg
            ) => response.status,
            providesTags: (result, error, id) => [{type: 'Comment', id: String(id)}]
        })
    }),
})
export const {useAddCommentMutation, useGetCommentsQuery} = commentApi

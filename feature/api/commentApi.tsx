import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {baseUrl} from "@/feature/api/authApi";
import {build} from "@react-native-community/cli-platform-android/build/commands/buildAndroid";
import {ResultResponse} from "@/types";

export type CommentType = {
    title: string,
    content: string,
    username: string,
    email: string,
    postId: number,
    rating: number
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
    endpoints: (buildr) => ({
        addComment: buildr.mutation<string, CommentType>({
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
            invalidatesTags: [{type: 'Comment', id: 'LIST'}],
        })
    }),
})
export const {useAddCommentMutation} = commentApi

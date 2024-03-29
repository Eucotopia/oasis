// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import {ResultResponse} from '@/types'
// import {RootState} from "@/app/store";
//
// export const themeApi = createApi({
//     reducerPath: 'themeApi',
//     tagTypes: ['Theme'],
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'http://localhost:8080/theme',
//         prepareHeaders: (headers, {getState}) => {
//             // By default, if we have a token in the store, let's use that for authenticated requests
//             const token = (getState() as RootState).auth.user?.token
//             if (token) {
//                 headers.set('Authorization', `Bearer ${token}`)
//             }
//             return headers
//         },
//     }),
//     endpoints: (builder) => ({
//         getThemes: builder.query<ResultResponse<string[]>, void>({
//             query: () => ({url: `/all`}),
//         }),
//     }),
// })
// export const {useGetThemesQuery} = themeApi

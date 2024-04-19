import {combineReducers, configureStore,} from '@reduxjs/toolkit'
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import authReducer from "@/feature/auth/authSlice";
import {postApi} from "@/feature/api/postApi";
import {authApi} from "@/feature/api/authApi";
import {tagApi} from "@/feature/api/tagApi";
import {setupListeners} from "@reduxjs/toolkit/query";

// 定义配置信息
const persistConfig = {
    key: "root",
    storage: storage,
    // 如果不想将部分state持久化，可以将其放入黑名单(blacklist)中.黑名单是设置
    blacklist: ["auth"]
}
const middleware = [thunk, postApi.middleware, authApi.middleware,tagApi.middleware]
const rootReducer = combineReducers({
    auth: authReducer,
    [postApi.reducerPath]: postApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [tagApi.reducerPath]: tagApi.reducer
})
// 创建持久化的配置persist的信息
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(middleware)
})

export const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
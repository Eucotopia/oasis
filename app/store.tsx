import {combineReducers, configureStore,} from '@reduxjs/toolkit'
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import authReducer from "@/feature/auth/authSlice";
import {postApi} from "@/feature/api/postApi";
import {authApi} from "@/feature/api/authApi";
import {tagApi} from "@/feature/api/tagApi";
import {fileApi} from "@/feature/api/fileApi";
import {columnApi} from "@/feature/api/columnApi";
import {categoryApi} from "@/feature/api/categoryApi";
import {setupListeners} from "@reduxjs/toolkit/query";

// define persist config
const persistConfig = {
    key: "root",
    storage: storage,
    // don't persist this state
    blacklist: ["auth"]
}
const middleware = [thunk, postApi.middleware, authApi.middleware, tagApi.middleware, categoryApi.middleware, columnApi.middleware,fileApi.middleware]
const rootReducer = combineReducers({
    auth: authReducer,
    [postApi.reducerPath]: postApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [tagApi.reducerPath]: tagApi.reducer,
    [fileApi.reducerPath]: fileApi.reducer,
    [columnApi.reducerPath]: columnApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer
})

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
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/app/store";
import {useSelector} from "react-redux";
import {useMemo} from "react";

export const currentPostContentSlice = createSlice({
    name: 'currentPostContent',
    initialState: {
        currentPostContent: "",
    },
    reducers: {
        saveCurrentPostContent: (state, action: PayloadAction<string>) => {
            state.currentPostContent = action.payload
        },
        removeCurrentPostContent: (state) => {
            state.currentPostContent = ""
        }
    }
})
export const {saveCurrentPostContent,removeCurrentPostContent} = currentPostContentSlice.actions
export default currentPostContentSlice.reducer
export const selectCurrentPostContent = (state: RootState) => state.currentPost.currentPostContent
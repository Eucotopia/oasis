import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/app/store";

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
export const {saveCurrentPostContent} = currentPostContentSlice.actions
export default currentPostContentSlice.reducer
export const selectCurrentPostContent = (state: RootState) => state.currentPost.currentPostContent

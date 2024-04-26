import {createSlice, PayloadAction} from "@reduxjs/toolkit";

/**
 * saveLastPostContent:synchronize save during editing ✔
 * removeLastPostContent:clear after successful upload ✔
 */
export const lastPostContentSlice = createSlice({
    name: 'lastPostContent',
    initialState: {
        lastPostContent: "",
    },
    reducers: {
        saveLastPostContent: (state, action: PayloadAction<string>) => {
            state.lastPostContent = action.payload
        },
        removeLastPostContent: (state) => {
            state.lastPostContent = ""
        }
    }
})
export const {saveLastPostContent,removeLastPostContent} = lastPostContentSlice.actions

export default lastPostContentSlice.reducer
import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "@/app/store";

type currentUserType = {
    username: string,
    email: string,
    authorization: string,
    cover: string
}

const currentUser: currentUserType = {
    username: "",
    email: "",
    authorization: "",
    cover: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {currentUser} as { currentUser: currentUserType | null },
    reducers: {
        setCredentials: (state, action: PayloadAction<currentUserType>) => {
            state.currentUser = action.payload
        },
        removeCredentials: (state) => {
            state.currentUser = null
        }
    }
})
export const {setCredentials, removeCredentials} = authSlice.actions
export default authSlice.reducer
export const selectCurrentUser = (state: RootState) => state.auth.currentUser

import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {RootState} from "@/app/store";

export type currentUserType = {
    username: string,
    email: string,
    authorization: string,
    cover: string
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {currentUser: null} as {
        currentUser: currentUserType | null
    },
    reducers: {
        setCredentials: (state, action: PayloadAction<currentUserType>) => {
            console.log("setCredentials", action.payload)
            state.currentUser = action.payload
        },
        removeCredentials: (state) => {
            console.log("removeCredentials")
            state.currentUser = null
        }
    }
})
export const {setCredentials, removeCredentials} = authSlice.actions
export default authSlice.reducer
export const selectCurrentUser = (state: RootState) => state.auth.currentUser

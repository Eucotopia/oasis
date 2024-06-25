import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

export type currentUserType = {
    username: string,
    email: string,
    authorization: string,
    avatar: string,
    isSelectRemember: boolean
}
/**
 * setCredentials:set current user when successful login ✔
 * removeCredentials:remove current user when logout ✔
 */
export const authSlice = createSlice({
    name: 'auth',
    initialState: {currentUser: null} as {
        currentUser: currentUserType | null
    },
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

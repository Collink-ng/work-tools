import { createSlice } from '@reduxjs/toolkit';
import { loadState } from './localStorage';

const initialState = {
    auth: {
        "token": loadState("token"),
        "name": loadState("name"),
        "loginStatus":loadState("loginStatus"),
        "loginRetry": false,
        "SelectedItem": loadState("selectedItem")
    },
}

export const loginAttempt = createSlice({
    name: 'login',
    initialState,
    reducers:{
        login: state => {
        },
        login_success: (state, payload) => {
            state.auth = payload.response
        },
        login_error: (state, payload) => {
            state.auth = payload.errorRes
        },
        change_selectedItem: (state, action) =>{
            state.auth.SelectedItem = action.payload
        }
    },
})

export const {login, login_success, login_error, change_selectedItem} = loginAttempt.actions
export default loginAttempt.reducer
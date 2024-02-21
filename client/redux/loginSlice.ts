import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppThunk, RootState } from './store'

//A slice represents a portion of the Redux state along with the reducer and actions related to it.
// We define a login slice 
//defining a type for the slice state 
interface LoginState {
    isLoggedIn : boolean,
    error: string | null,
    username: string,
    password: string,
} 

//initial state of the login slice 
const initialState: LoginState = {
    isLoggedIn: false,
    error: null,  
    username: '',
    password: '',
} 

export const loginSlice: any = createSlice ({
     // `createSlice` will infer the state type from the `initialState` argument
    name: 'login',
    initialState,
    //reducers will take in the initial state of an application and an action as the argument
    //and will return a new state based on the action.
    reducers: {
        loginRequest (state) {
        //handle request 
        },
        loginSuccess(state){
            state.isLoggedIn = true;
            state.error = null;
        },
        loginFailure(state, action: PayloadAction<string>){
            state.isLoggedIn = false;
            state.error = action.payload;
        },
    },
});


export const fetchLogin = (): AppThunk => async (dispatch, getState) => {
    //hande loging in requests
    try{
        const { username, password}: LoginState = getState().login as LoginState;
        const response = await fetch ('/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username , password })
        })
        if(response.ok){
            dispatch(loginSuccess());
        }
    } catch {
        dispatch(loginFailure());
    }

};





export default loginSlice.reducer;
export const {loginRequest, loginSuccess, loginFailure} = loginSlice.actions
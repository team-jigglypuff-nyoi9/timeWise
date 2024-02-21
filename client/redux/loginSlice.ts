import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

//A slice represents a portion of the Redux state along with the reducer and actions related to it.
// We define a login slice 
//defining a type for the slice state 
export interface LoginState {
    isLoggedIn : boolean; 
    error: string | null   
}

//initial state of the login slice 
const initialState: LoginState ={
    isLoggedIn: false,
    error: null, 
} as LoginState;

export const loginSlice = createSlice ({
     // `createSlice` will infer the state type from the `initialState` argument
    name: 'login',
    initialState,
    //reducers will take in the initial state of an application and an action as the argument
    //and will return a new state based on the action.
    reducers: {
        loginRequest(state, action: PayloadAction<{username: string, password: string}>){
            //hande loging in requests
        
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

export default loginSlice.reducer;
export const {loginRequest, loginSuccess, loginFailure} = loginSlice.actions
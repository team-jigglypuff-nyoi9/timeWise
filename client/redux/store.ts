//creating a redux store 
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import loginReducer from './loginSlice'

//Reducers are functions that specify how the application's state changes in response to actions.
//store is configured with reducers 


export const store = configureStore({
  reducer: {
 
    login: loginReducer, 
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

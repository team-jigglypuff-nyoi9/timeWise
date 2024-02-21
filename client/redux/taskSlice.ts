import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from './store'

// define our types, which will be an array of objects containing info on each task
interface task {
    name: string,
    details: string
}
interface taskState {
    tasks: task[]
}

// define our initial state
const initialState: taskState = {
    tasks: [
        {name: 'hardcoded 1', details: 'hardcoded 1'},
        {name: 'hardcoded 2', details: 'hardcoded 2'},
        {name: 'hardcoded 3', details: 'hardcoded 3'}
    ]
}

// create our slice
export const taskSlice = createSlice({
    name: 'task',
    initialState, // define our intial state to the empty array above
    reducers:{
        // create a reducer to add a task
        addTask: (state) => {
            state.tasks.push({name: 'hardcoded name', details: 'hardcoded details'})
        },
        // create a reducer to remove a task
    }
})

// export our reducers
export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;

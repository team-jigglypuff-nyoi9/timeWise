import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from './store'

// define our types, which will be an array of objects containing info on each task
interface task {
    name: string,
    details: string
}
interface taskState {
    tasks: task[],
    inputName: string,
    inputDetails: string
}

// define our initial state
const initialState: taskState = {
    tasks: [
        {name: 'hardcoded 1', details: 'hardcoded 1'},
    ],
    inputName: '',
    inputDetails: ''
}

// create our slice
export const taskSlice = createSlice({
    name: 'task',
    initialState, // define our intial state to the empty array above
    reducers: {
        // create a reducer to add a task
        addTask: (state, action) => {
            state.tasks.push({name: action.payload.name, details: action.payload.details})
        },
        updateInputName: (state, action) => {
            state.inputName = action.payload;
        },
        updateInputDetails: (state, action) => {
            state.inputDetails = action.payload;
        },
    }
})

// export our reducers
export const { addTask, updateInputDetails, updateInputName } = taskSlice.actions;
export default taskSlice.reducer;

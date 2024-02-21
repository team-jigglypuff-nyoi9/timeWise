import React from 'react';
import { addTask, updateInputName, updateInputDetails } from '../redux/taskSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import type { RootState } from '../redux/store'

export default function ItemCreater():React.JSX.Element {
  // get our items data
  const items = useAppSelector((state: RootState)=> state.task)
  // get our dispatch function
  const dispatch = useAppDispatch();
  
  //define our function to update our store with the value from the input fields
  function updateInputNameOnChange(value: any){
    dispatch(updateInputName(value))
  }
  
  //define our function to update our store with the value from the input fields
  function updateInputDetailsOnChange(value: any){
    dispatch(updateInputDetails(value))
  }
  
  //define function to update state with the new task
  function addTaskOnclick(): void {
    // add a new task to the redux store
    dispatch(addTask({name: items.inputName, details: items.inputDetails}));
    //update our state to clear out the input forms
    dispatch(updateInputName(''));
    dispatch(updateInputDetails(''))
  }
  
  function submitSchedule(): void {
    console.log('submitSchedule invoked')
  }
  
  return (
    <div className="itemcreater-bar">
      <input type='text' id="task-name-input" placeholder="Name of task" value={items.inputName} onChange={(e)=>updateInputNameOnChange(e.target.value)}/>
      <input type='text' id="task-details-input" placeholder="Task details" value={items.inputDetails} onChange={(e)=>updateInputDetailsOnChange(e.target.value)}/>
      <button id="submit-task-button" onClick={addTaskOnclick}>Submit task</button>
      <button id="submit-schedule-button" onClick={submitSchedule}>Submit schedule</button>  
    </div>
  );
}
import React from 'react';
import { addTask } from '../redux/taskSlice'
import { useAppDispatch } from '../redux/hooks'

export default function ItemCreater():React.JSX.Element {
  // get our dispatch function
  const dispatch = useAppDispatch();
  function addTaskOnclick(): void {
    // get the data in the two inputs
    
    // add a new task to the redux store
    dispatch(addTask());
  }
  
  function submitSchedule(): void {
    console.log('submitSchedule invoked')
  }
  
  return (
    <div className="itemcreater-bar">
      <input type='text' id="task-name-input" placeholder="Name of task"/>
      <input type='text' id="task-details-input" placeholder="Task details"/>
      <button id="submit-task-button" onClick={addTaskOnclick}>Submit task</button>
      <button id="submit-schedule-button" onClick={submitSchedule}>Submit schedule</button>  
    </div>
  );
}
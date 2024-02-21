import React from 'react';
import { addTask } from '../redux/taskSlice'

export default function ItemCreater():React.JSX.Element {
  function addTask(): void {
    console.log('addTask invoked')
    // get the data in the two inputs
    
    // add a new task to the redux store

  }
  
  function submitSchedule(): void {
    console.log('submitSchedule invoked')
  }
  
  return (
    <div className="itemcreater-bar">
      <input type='text' id="task-name-input" placeholder="Name of task"/>
      <input type='text' id="task-details-input" placeholder="Task details"/>
      <button id="submit-task-button" onClick={addTask}>Submit task</button>
      <button id="submit-schedule-button" onClick={submitSchedule}>Submit schedule</button>  
    </div>
  );
}
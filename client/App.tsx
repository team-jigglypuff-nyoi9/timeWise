import React from 'react';
import MainContainer from './components/mainContainer';
import { DndContext, closestCenter } from '@dnd-kit/core';


export default function App():React.JSX.Element {
  return (
    <div className="app">
      <MainContainer />      
    </div>
  );
}
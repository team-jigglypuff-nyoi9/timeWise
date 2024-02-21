import React from 'react';
import Item from './item';
import ItemCreater from './itemCreater';
import Board from './board';
import { Task, BoardProps } from "./types";

import { DndContext, closestCenter } from '@dnd-kit/core';
import { useAppSelector } from '../redux/hooks'

export default function MainContainer():React.JSX.Element {
  // get our items from our redux store
  const items = useAppSelector((state) => state.task.tasks);
  // render our items to the screen
  const itemElements: React.JSX.Element[] = [];
  for(let i = 0; i < items.length; i++){
    itemElements.push(<Item key={`item-${i}`} name={items[i].name} details={items[i].details} />)
  }
  
  return (
    <div className="maincontainer">
        <Item /> 
        <ItemCreater />
    </div>
  );
}
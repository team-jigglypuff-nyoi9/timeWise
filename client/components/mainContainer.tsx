import React from 'react';
import Item from './item';
import ItemCreater from './itemCreater';
import Board from './board';
import { Task, BoardProps } from "./types";

import { DndContext, closestCenter } from '@dnd-kit/core';
import { useAppSelector } from '../redux/hooks'

export default function MainContainer():React.JSX.Element {
  return (
    <div className="maincontainer">
        <Board /> 
        <ItemCreater />
    </div>
  );
}
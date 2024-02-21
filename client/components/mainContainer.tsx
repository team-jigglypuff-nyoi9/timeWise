import React from 'react';
import Item from './item';
import ItemCreater from './itemCreater';
import Board from './board';
import { Task, BoardProps } from "./types";

import { DndContext, closestCenter } from '@dnd-kit/core';


export default function MainContainer(): React.ReactElement {
  const dummyData: Task[] = [
    { id: 1, title: 'clean room' },
    { id: 2, title: 'buy groceries' },
    { id: 3, title: 'meeting @10:30am' }
  ]

  return (
    <div className="maincontainer">
      <DndContext collisionDetection={closestCenter}>
        <Board tasks={dummyData} />
      </DndContext>
      <ItemCreater />
    </div>
  );
}
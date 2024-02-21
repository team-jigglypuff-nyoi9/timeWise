import { type } from "os";
import React from "react";
import { BoardProps } from "./types";
import Item from "./item";

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { DndContext, closestCorners } from '@dnd-kit/core'

export default function Board({ tasks }: BoardProps): React.ReactElement {
  const renderedTasks = tasks.map((task) => (
    <Item key={task.id} text={task.title} id={task.id}/>
  ));

  return (
    <div className="Board">
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
      {renderedTasks}
      </SortableContext >
    </div>
  );
}
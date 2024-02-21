import { type } from "os";
import React from "react";
import { BoardProps } from "./types";
import Item from "./item";
import { useAppSelector } from '../redux/hooks'

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { DndContext, closestCorners } from '@dnd-kit/core'

export default function Board(): React.ReactElement {
  // get our items from our redux store
  const items = useAppSelector((state) => state.task.tasks);
  // render our items to the screen
  const renderedTasks: React.JSX.Element[] = [];
  const uniqueIds: string[] = []
  for(let i = 0; i < items.length; i++){
    renderedTasks.push(<Item key={`item-${i}`} id={`item-${i}`} name={items[i].name} details={items[i].details} />)
    uniqueIds.push(`item-${i}`)
  }

  return (
    <div className="Board">
      <SortableContext items={uniqueIds} strategy={verticalListSortingStrategy}>
        {renderedTasks}
      </SortableContext >
    </div>
  );
}
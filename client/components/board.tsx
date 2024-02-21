// import { type } from "os";
// import React from "react";
// import { BoardProps } from "./types";
// import Item from "./item";
// import DraggableItem from "./DraggableItem";

// import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
// import { DndContext, closestCorners } from '@dnd-kit/core'

// export default function Board({ tasks }: BoardProps): React.ReactElement {
//   const renderedTasks = tasks.map((task) => (
//     <Item key={task.id} text={task.title} id={task.id}/>
//   ));

//   return (
//     <div className="Board">
//         <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
//       {renderedTasks}
//       </SortableContext >
//       <DndContext>   <DraggableItem id="item1">Drag me!</DraggableItem></DndContext>
//     </div>
//   );
// }

import React from "react";
import { BoardProps } from "./types";
import Item from "./item";
import DraggableItem from "./DraggableItem";

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { DndContext, closestCorners, useDroppable } from '@dnd-kit/core'

function DroppableArea({ children, id }: { children: React.ReactNode; id: string }) {
  const { isOver } = useDroppable({
    id,
  });

  const style: React.CSSProperties = {
    width: '100%', // Adjust as needed
    minHeight: '50px', // Adjust as needed
    backgroundColor: isOver ? 'lightblue' : 'transparent', // Example: change background when item is over a droppable area
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px dashed #aaa', // Example: dashed border when item is over
    margin: '5px 0',
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
}

export default function Board({ tasks }: BoardProps): React.ReactElement {
  const renderedTasks = tasks.map((task) => (
    <Item key={task.id} text={task.title} id={task.id}/>
  ));

  return (
    <div className="Board">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {renderedTasks}
      </SortableContext>

      <DndContext>
        <DraggableItem id="item1">Drag me!</DraggableItem>
        <DroppableArea id="droppableArea1">
          Droppable Area 1
        </DroppableArea>
        <DroppableArea id="droppableArea2">
          Droppable Area 2
        </DroppableArea>
        {/* Add more DroppableArea components as needed */}
      </DndContext>
    </div>
  );
}

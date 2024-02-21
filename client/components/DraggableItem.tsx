// import React from 'react';
// import { CSS } from '@dnd-kit/utilities';
// import { useDraggable } from '@dnd-kit/core';

// type DraggableItemProps = {
//   id: string;
//   children: any;
// };

// const DraggableItem: React.FC<DraggableItemProps> = ({ id, children }) => {
//   const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
//     id,
//   });

//   const style: React.CSSProperties = {
//     transform: CSS.Transform.toString(transform),
//     opacity: isDragging ? 0.5 : 1,
//     cursor: 'grab',
//   };

//   return (
//     <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
//       {children}
//     </div>
//   );
// };

// export default DraggableItem;


import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import { useDraggable, useDroppable } from '@dnd-kit/core';

type DraggableItemProps = {
  id: string;
  children: any;
};

const DraggableItem: React.FC<DraggableItemProps> = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
  });

  const { isOver } = useDroppable({
    id,
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1,
    cursor: 'grab',
    backgroundColor: isOver ? 'lightblue' : 'transparent', // Example: change background when item is over a droppable area
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

export default DraggableItem;


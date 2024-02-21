import React from 'react';
import { ItemProps } from './types';

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'


export default function Item({ text, id }: ItemProps):React.JSX.Element {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({id});
  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  };
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="todo-item">
      <div>{text}</div>
    </ div>
  );
}
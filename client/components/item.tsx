import React from 'react';
import { ItemProps } from './types';

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'


export default function Item({ text, id }: ItemPropsprops: any):React.JSX.Element {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({id});
  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  };
  return (
    <div className="todo-item">
      <div>name of item</div>
      <div>details</div>
    </ div>
  );
}
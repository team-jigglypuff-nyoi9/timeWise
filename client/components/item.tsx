import React from 'react';

export default function Item(props: any):React.JSX.Element {
  return (
    <div className="todo-item">
      <div>{props.name}</div>
      <div>{props.details}</div>
    </ div>
  );
}
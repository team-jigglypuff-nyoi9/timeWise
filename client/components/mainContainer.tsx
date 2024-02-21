import React from 'react';
import Item from './item';
import ItemCreater from './itemCreater';


export default function MainContainer():React.JSX.Element {
  return (
    <div className="maincontainer">
        <Item /> 
        <ItemCreater />
    </div>
  );
}
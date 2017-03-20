import React from 'react';

const Person = ({id, name, favoriteCity}) => {
  return (
    <div className="row" id="hoverableRow">
      <div className="cell">
        {id}
      </div>
      <div className="cell">
        {name}
        </div>
      <div className="cell">
        {favoriteCity}
      </div>
    </div>
  );
}

export default Person;

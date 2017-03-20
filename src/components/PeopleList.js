import React from 'react';
import Person from './Person';

const PeopleList = ({people}) => {
  if (people.length === 0){
    return <div className="col"/>;
  }

  const peopleList = people.map( person => {
    return (
        <Person
        key={person.id}
        id={person.id}
        name={person.name}
        favoriteCity={person.favoriteCity} />
    );
  });

  return (
    <div className="col">
      <div className="table">
        <div className="row">
          <div className="cell" id="thead">ID</div>
          <div className="cell" id="thead">NAME</div>
          <div className="cell" id="thead">FAVORITE CITY</div>
        </div>
        {peopleList}
      </div>
    </div>
  );
}

export default PeopleList;

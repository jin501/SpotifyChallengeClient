import React, { Component } from 'react';
import Person from './Person';

class PeopleList extends Component {
  render() {

      const people = this.props.people.map( person => {
        return (
          < Person
          key={person.id}
          id={person.id}
          name={person.name}
          favoriteCity={person.favoriteCity} />
        );
      });

    return (
      <ul className="Index">
        {people}
      </ul>
    );
  }
}

export default PeopleList;

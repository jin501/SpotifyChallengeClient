import React, { Component } from 'react';

class Person extends Component {
  render() {
    // debugger
    return (
      <li>
        {this.props.id}. {this.props.name} {this.props.favoriteCity}
      </li>
    );
  }
}

export default Person;

import React, { Component } from 'react';

class Instruction extends Component {

  render() {
    return (
      <p>{this.props.step}</p>
    );
  }
}

export default Instruction;

import React, { Component } from 'react';

class Button extends Component {

  render() {
    // debugger
    return (
      <button onClick={this.props.onClick}>{this.props.value}</button>
    );
  }
}

export default Button;

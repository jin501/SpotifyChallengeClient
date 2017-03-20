import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      favoriteCity: this.props.favoriteCity,
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
  }

  handleNameChange(ev){
    this.setState({name: ev.target.value})
  }
  handleCityChange(ev){
    this.setState({favoriteCity: ev.target.value})
  }

  render() {
    if (!this.props.display){
      return null;
    }

    return (
      <div>
        Name: <input type="text" id="name" value={this.state.name} onChange={this.handleNameChange} />
        Favorite City: <input type="text" id="favoriteCity" value={this.state.favoriteCity} onChange={this.handleCityChange} />
      </div>
    );
  }
}

export default Form;

import React, { Component } from 'react';
import Button from './Button';
import PeopleList from './PeopleList';
import Instruction from './Instruction';
import Form from './Form';
import { getPeople, createEditOrDeletePerson } from '../requests';
import step from '../step';
import '../App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      buttonValue: 'Start',
      instruction: "To begin a walkthrough of the client app, please click start:",
      stepNumber: 0,
      displayForm: false,
      prefillForm: {
        name: "Sean",
        favoriteCity: "NYC",
      }
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);

    // preserve the initial state in a new object
    this.baseState = this.state;
  }

  handleButtonClick(){
    switch (this.state.stepNumber) {
      case 0:
        this.updateState();
        break;
      case 1:
        getPeople().then(res => {
          this.updateState(res);
        });
        break;
      case 2:
        createEditOrDeletePerson('post').then(res => {
          const data = [...this.state.data, res];
          this.updateState(data);
        });
        break;
      case 3:
        const lastCreated = this.state.data.pop();
        getPeople(lastCreated.id).then(res => {
          this.updateState([res]);
        });
        break;
      case 4:
        createEditOrDeletePerson('put', this.state.data[0].id).then(res => {
          this.updateState([res]);
        });
        break;
      case 5:
        getPeople(this.state.data[0].id).then(res => {
          this.updateState([res]);
        });
        break;
      case 6:
        createEditOrDeletePerson('delete', this.state.data[0].id).then(res => {
          this.updateState(res);
        });
        break;
      case 7:
        getPeople().then(res => {
          this.updateState(res);
        });
        break;
      case 8:
        location.reload();
        break;
      default:
        this.setState(this.baseState);
    }
  }

  updateState(data=[]){
    const { buttonValue, stepNumber, instruction, displayForm } = step.next();
    this.setState({
      data,
      buttonValue,
      stepNumber,
      instruction,
      displayForm,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome!</h2>
        </div>

        <div className="Action">
          <Instruction step={this.state.instruction} />
          <Form display={this.state.displayForm} name={this.state.prefillForm.name} favoriteCity={this.state.prefillForm.favoriteCity}/>
          <Button onClick={this.handleButtonClick} value={this.state.buttonValue} />
        </div>

        <div className="Display">
          <PeopleList people={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;

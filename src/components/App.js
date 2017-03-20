import React, { Component } from 'react';
import Button from './Button';
import PeopleList from './PeopleList';
import Instruction from './Instruction';
import Form from './Form';
import { getPeople, createEditOrDeletePerson } from '../requests';
import step from '../step';

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

    /* meant to preserve the initial state in a new object */
    this.baseState = this.state;
  }

/* button event listener that decides what function(s)
to execute based on the step number  */
  handleButtonClick(){
    switch (this.state.stepNumber) {
      case 0:
        history.pushState({}, null, '/people');
        this.updateState();
        break;
      case 1:
        getPeople().then(res => {
          // history.pushState({}, null, '/people/new');
          this.updateState(res);
        });
        break;
      case 2:
        createEditOrDeletePerson('post').then(res => {
          // history.pushState({}, null, `/people/${res.id}`);
          const data = [...this.state.data, res];
          this.updateState(data);
        });
        break;
      case 3:
        const lastCreated = this.state.data.pop();
        getPeople(lastCreated.id).then(res => {
          // history.pushState({}, null, `/people/${lastCreated.id}/edit`);
          this.updateState([res]);
        });
        break;
      case 4:
        createEditOrDeletePerson('put', this.state.data[0].id).then(res => {
          // history.pushState({}, null, '/people/1');
          this.updateState([res]);
        });
        break;
      case 5:
        getPeople(1).then(res => {
          // history.pushState({}, null, '/people/1');
          if(!res){
            alert(`Person was not found in database. Please skip to the next step!`)
          }
          this.updateState([res]);
        });
        break;
      case 6:
        createEditOrDeletePerson('delete', 1).then(res => {
          // history.pushState({}, null, '/people');
          this.updateState(res);
        });
        break;
      case 7:
        getPeople().then(res => {
          // history.pushState({}, null, '/people');
          this.updateState(res);
        });
        break;
      case 8:
        // history.pushState({}, null, '/');
        location.reload();
        break;
      default:
        this.setState(this.baseState);
    }
  }

  /* calls a helper class step.next and then setState */
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
          <h1>People of Spotify</h1>
        </div>
        <div className="App-body">
          <div className="col" id="Action">
            <Instruction step={this.state.instruction} />
            <Form display={this.state.displayForm} name={this.state.prefillForm.name} favoriteCity={this.state.prefillForm.favoriteCity}/>
            <Button onClick={this.handleButtonClick} value={this.state.buttonValue} />
          </div>
            <PeopleList people={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;

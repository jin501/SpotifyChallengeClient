import React, { Component } from 'react';
import Button from './Button';
import PeopleList from './PeopleList';
import Instruction from './Instruction';
import Form from './Form';
import { getPeople, createEditOrDeletePerson } from '../requests';
import { checkInvalidForm, loadSpinner } from '../helpers';
import step from '../step';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      buttonValue: 'Start',
      instruction: "Welcome! To begin a walkthrough of this client application, please click start:",
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
to execute based on the current step number */
  handleButtonClick(){
    switch (this.state.stepNumber) {
      case 0:
        this.updateState();
        break;

      case 1:
        this.stepOne();
        break;

      case 2:
      /* First validate input fields using helper method checkInvalidForm */
        if(checkInvalidForm()){
          alert("please enter both fields");
          break;
        }
        this.stepTwo();
        break;

      case 3:
      /* grab the last created person from state */
        const lastCreated = this.state.data.pop();
        getPeople(lastCreated.id)
          .then(res => { this.updateState([res]); });
        break;

      case 4:
      /* First validate input fields using helper method checkInvalidForm */
        if(checkInvalidForm()){
          alert("please enter both fields");
          break;
        }
        createEditOrDeletePerson('put', this.state.data[0].id)
          .then(res => { this.updateState([res]); });
        break;

      case 5:
        this.stepFive(1);
        break;

      case 6:
        this.stepSix(1);
        break;

      case 7:
        getPeople().then(res => { this.updateState(res); });
        break;

      case 8:
        location.reload();
        break;

      default:
        this.setState(this.baseState);
    }
  }

  /* this function loads the spinner, then makes a GET request */
  stepOne(){
    loadSpinner();
    getPeople().then(data => {
      /* remove the loader */
      document.getElementById("Display").innerHTML = ""
      /* call setState with new data */
      this.updateState(data);
    });
  }

  stepTwo(){
    /* make post request */
    createEditOrDeletePerson('post').then(res => {
    /* using spread operator to add response, which is the
    newly created object to the current this.state.data object */
      const data = [...this.state.data, res];
      this.updateState(data);
    });
  }

  stepFive(id){
    getPeople(id).then(res => {
      if(!res){
        var id = prompt("Sorry, Person was not found in database. Please enter another ID number to find:", "2");
        this.stepFive(id);
      }
      if(res){
        this.updateState([res]);
      }
    });
  }

  stepSix(id){
    createEditOrDeletePerson('delete', id).then(res => {
      if(!res){
        var id = prompt("Person has already been deleted. Please enter another ID number of a person entry you wish to delete:", "2");
        this.stepSix(id);
      }
      if(res){
        this.updateState(res);
      }
    });
  }

  /* calls a helper class step.next and then calls setState */
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
          <h1>Spoti<span>find</span></h1>
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

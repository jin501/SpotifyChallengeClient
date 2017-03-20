import React, { Component } from 'react';
import Button from './components/Button';
import PeopleList from './components/PeopleList';
import Instruction from './components/Instruction';
import Form from './components/Form';
import { getPeople, createPerson } from './requests';
import step from './step';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      buttonValue: 'Start',
      instruction: "To begin walkthrough of client app, please click button",
      stepNumber: 0,
      displayForm: false,
      prefillForm: {
        name: "Sean",
        favoriteCity: "NYC",
      }
    }
  }

  handleButtonClick(){
    // debugger
    switch (this.state.stepNumber) {
      case 0:
      this.updateState();
        break;
      case 1:
        getPeople().then(res => {
          this.updateState(res)
        });
        break;
      case 2:
        createPerson().then(res => {
          // debugger
          const data = [...this.state.data, res]
          //render this new person below
          this.updateState(data)
        })
        break;
      case 3:
        this.updateState();
        //render that person with that div
        break;
      case 4:
        this.postPerson();
        break;
      default:
        // return ()=>{
        //   const people = this.getPeople();
        // }
    }
  }

  updateState(data=[]){
    const { buttonValue, stepNumber, instruction, displayForm } = step.next()
    this.setState({
      data,
      buttonValue,
      stepNumber,
      instruction,
      displayForm,
    })
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
          <Button onClick={this.handleButtonClick.bind(this)} value={this.state.buttonValue} />
        </div>

        <div className="Display">
          <PeopleList people={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;

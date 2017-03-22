/* This file holds a mini class called step that
increments the next step, and finds the next states.
Lines 5-8 are variables that determine the next step */

const buttonValues = ["GET people index", "Create Person", "GET last created person", "Edit Person", "Show person at id: 1", "DELETE person at id: 1", "GET people index", "start over"];
const instructions = ["1. Make a GET request to /people", "2. Make a POST request to /people", "3. Make a GET request to retrieve the object created in the previous request", "4. Make a PUT request to /people and modify the attribute city to be 'Brooklyn'", "5. Make a GET request to /people/1", "6. Make a DELETE request to /people/1", "7. Make a GET request to /people", "All Done! Click to start back from step 1."];
const displayForm = [false, true, false, true, false, false, false];
let currentStepNumber = 0;

const step = {
  nextButtonValue() {
    return buttonValues[currentStepNumber];
  },
  nextInstruction() {
    return instructions[currentStepNumber];
  },
  showDisplayForm() {
    return displayForm[currentStepNumber];
  },
  nextStepNumber() {
    return ++currentStepNumber;
  },
  next() {
    return {
      buttonValue: this.nextButtonValue(),
      instruction: this.nextInstruction(),
      displayForm: this.showDisplayForm(),
      stepNumber: this.nextStepNumber(),
    };
  },
};

export default step;

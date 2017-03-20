const buttonValues = ["GET /people", "Create Person", "GET created person", "Edit Person", "GET /people/1", "DELETE person", "GET /people"]
const instructions = ["1. Make a GET request to /people", "2. Make a POST request to /people", "3. Make a GET request to retrieve the object created in the previous request", "4. Make a PUT request to /people and modify the attribute city to be 'Brooklyn'", "5. Make a GET request to /people/1", "6. Make a DELETE request to /people/1", "7. Make a GET request to /people"]
const displayForm = [false, true, false, true, false, false, false]
let currentStepNumber = 0

const step = {
  nextButtonValue() {
    return buttonValues[currentStepNumber]
  },
  nextInstruction() {
    return instructions[currentStepNumber]
  },
  showDisplayForm() {
    return displayForm[currentStepNumber]
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
    }
  },
}

export default step;

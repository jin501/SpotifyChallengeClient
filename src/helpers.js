/* This file contains helper methods */

/* this function validates the create and edit form
to make sure that both inputs are filled in */
export function checkInvalidForm(){
    let name = document.getElementById("name").value;
    let favoriteCity = document.getElementById("favoriteCity").value;
    if(!name || !favoriteCity){
      return true
    }
  }

/* this function adds a loading gif during API calls */
export function loadSpinner(){
  const display = document.getElementById("Display")
  display.innerHTML += "<img id='loader' src='../loading.gif'>"
}

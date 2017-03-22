export function checkInvalidForm(){
    let name = document.getElementById("name").value;
    let favoriteCity = document.getElementById("favoriteCity").value;
    if(!name || !favoriteCity){
      return true
    }
  }

export function loadSpinner(){
  const display = document.getElementById("Display")
  display.innerHTML += "<img id='loader' src='../loader.gif'>"
}

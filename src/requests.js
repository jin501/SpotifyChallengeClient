// postPerson().then( res => this.updateState(res) )

export function getPeople(){
  // debugger
  const url = "https://spotify-challenge.herokuapp.com/people"
  // const url = "http://localhost:3001/people"
  return fetch(url).then(res => res.json())
}

export function createPerson(){
  const url = "https://spotify-challenge.herokuapp.com/people"
  // const url = "http://localhost:3001/people"
  const name = document.getElementById("name").value
  const favoriteCity = document.getElementById("favoriteCity").value
  const data = {
    method: "POST",
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({person: {name: name, favoriteCity: favoriteCity}})
    };
  return fetch(url, data).then(res => res.json())
    // .then(res => {
    //   // updateState(res)
    // })
}

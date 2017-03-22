// let url = `https://sol-jin.herokuapp.com/`;
let url = `https://spotify-challenge.herokuapp.com/people/`;

export function getPeople(id){
  let requestURL = url;
  if(id){ requestURL = url + id; }
  return fetch(requestURL)
    .then(handleErrors)
    .then(response => response.json() )
    .catch(error => console.log(error) );
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function createEditOrDeletePerson(method, id){
  let requestURL = url;
  if(id){ requestURL = url + id; }
  let data = {
    method: method,
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
  };
  if(method !== 'delete'){
    const name = document.getElementById("name").value;
    const favoriteCity = document.getElementById("favoriteCity").value;
    const body = {body: JSON.stringify({person: {name: name, favoriteCity: favoriteCity}})};
    data = { ...data, ...body }
    // data = Object.assign({}, data, body);
  }
  return fetch(requestURL, data)
    .then(handleErrors)
    .then(res => res.json())
    .catch(error => console.log(error) );
}

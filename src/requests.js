// const url = "https://spotify-challenge.herokuapp.com/people"
let url = `http://localhost:3001/people/`;

export function getPeople(id){
  let requestURL = url;
  if(id){ requestURL = url + id; }
  return fetch(requestURL).then(res => res.json());
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
  }
  return fetch(requestURL, data).then(res => res.json());
}

export function creditPerson(method, id){
  let requestURL = url;
  if(id){ requestURL = url + id; }
  const name = document.getElementById("name").value;
  const favoriteCity = document.getElementById("favoriteCity").value;
  const data = {
    method: method,
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({person: {name: name, favoriteCity: favoriteCity}})
  };
  return fetch(requestURL, data).then(res => res.json());
}

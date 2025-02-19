import tokenService from '../services/tokenService';
const BASE_URL = '/api/movies/';


// services/movies-api.js
export function create(movie) {
    return fetch(BASE_URL, {
          method: "POST",
          headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
          body: JSON.stringify(movie)
    }, {mode: "cors"})
    .then(res => res.json());
}

export function getAll() {
      return fetch(BASE_URL, {mode: "cors"})
      .then(res => res.json())
}
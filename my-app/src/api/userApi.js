import {handleError, handleResponse} from "./apiUtils";

let apiPage = 'https://randomuser.me/api/?page=3&results=10&seed=abc';
let api = 'https://randomuser.me/api/?results=20';

export function fetchUser() {
    return fetch(api)
        .then(handleResponse)
        .catch(handleError)
}
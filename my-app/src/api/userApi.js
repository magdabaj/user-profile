import {handleError, handleResponse} from "./apiUtils";

let apiPage = 'https://randomuser.me/api/?page=3&results=10&seed=abc';
let api = 'http://jsonplaceholder.typicode.com/users/';

export const fetchUser = async () => {
    const response = await fetch(api);
    const data = await response.json();
    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export function saveUserApi(user) {
    return fetch(api + (user.id || ''), {
        method: user.id ? 'PUT' : 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(user)
    })
        .then(handleResponse)
        .catch(handleError)
}


export function deleteUserApi(id) {
    return fetch( `http://jsonplaceholder.typicode.com/users/${id}`, {method: 'DELETE'})
        .then(handleResponse)
        .catch(handleError)
}

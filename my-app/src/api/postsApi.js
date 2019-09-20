import {handleError, handleResponse} from "./apiUtils";


export const fetchUserPosts = async id => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data
};

export function saveUserApi(userId, post) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}&&id=${post.id || ''}`, {
        method: post.id ? 'PUT' : 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(post)
    })
        .then(handleResponse)
        .catch(handleError)
}

export function deletePostApi(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    console.log(url);
    return fetch(url , {method: 'DELETE'})
        .then(handleResponse)
        .catch(handleError)
}


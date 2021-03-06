import {handleError, handleResponse} from "./apiUtils";

let api = 'http://jsonplaceholder.typicode.com/posts/';

export const fetchAllPosts = async () => {
    const response = await fetch(api);
    const data = await response.json();
    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};


export const fetchUserPosts = async id => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data
};

export function savePostApi(post, userId) {
    return fetch(`http://jsonplaceholder.typicode.com/posts/${post.id || ''}`, {
        method: post.id ? 'PUT' : 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            id: post.id,
            title: post.title,
            body: post.body,
            userId: userId
        })
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


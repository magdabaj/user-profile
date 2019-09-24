import {handleError, handleResponse} from "./apiUtils";

let api = 'http://jsonplaceholder.typicode.com/comments/';

export const fetchAllComments = async () => {
    const response = await fetch(api);
    const data = await response.json();
    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};


export const fetchPostsComments = async id => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data
};

export function saveComment(postId, comment) {
    return fetch(`http://jsonplaceholder.typicode.com/posts/${comment.id || ''}`, {
        method: comment.id ? 'PUT' : 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            id: comment.id,
            name: comment.name,
            email: comment.email,
            body: comment.body,
            postId: postId
        })
    })
        .then(handleResponse)
        .catch(handleError)
}

export function deleteComment(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    console.log(url);
    return fetch(url , {method: 'DELETE'})
        .then(handleResponse)
        .catch(handleError)
}


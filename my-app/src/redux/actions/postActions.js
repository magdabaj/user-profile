import * as types from './actionTypes';

export const loadUserPosts = (id) => ({
    type: types.LOAD_POSTS,
    id
});

export const loadUserPostsSuccess = (id, posts) => ({
    type: types.LOAD_POSTS_SUCCESS,
    id,
    posts
});

export const deletePost = (post) =>( {
    type: types.DELETE_POST,
    post
});

export const deletePostSuccess = (id, userId) => ({
    type: types.DELETE_POST_SUCCESS,
    id,
    userId
});

export const deletePostFinished = () => ({
    type: types.DELETE_USER_FINISHED,
});

export const deletePostFailed = (error, post) => ({
    type: types.USERS_LOAD_FAIL,
    error: error.messages,
    id: post.id
});

export const setPost = post => ({
    type: types.SET_POST,
        post
});
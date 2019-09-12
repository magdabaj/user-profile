import * as types from './actionTypes';

export const loadUserPosts = (id) => ({
    type: types.LOAD_POSTS,
    id
});

export const loadUserPostsSuccess = (id, posts) => ({
    type: types.LOAD_POSTS_SUCCESS,
    id,
    posts
})
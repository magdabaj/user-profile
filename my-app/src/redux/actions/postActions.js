import * as types from './actionTypes';

export const loadPosts = () => ({
    type: types.LOAD_POSTS
});

export const loadPostsSuccess = posts => ({
    type: types.LOAD_POSTS_SUCCESS,
    posts
});

export const setPostError = error => ({
    type: types.LOAD_POSTS_FAILED,
        error
});

// export const loadUserPosts = (id) => ({
//     type: types.LOAD_POSTS,
//     id
// });

// export const loadUserPostsSuccess = (id, posts) => ({
//     type: types.LOAD_POSTS_SUCCESS,
//     id,
//     posts
// });

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
    type: types.DELETE_POST_FINISHED,
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

export const savePost = (post, userId) => ({
    type: types.SAVE_POST,
    post,
    userId
});

export const createPostSuccess = (post, userId) => ({
    type: types.CREATE_POST_SUCCESS,
    post,
    userId
});

export const updatePostSuccess = (post)=> ({
    type: types.UPDATE_POST_SUCCESS,
    post
});

export const savePostSuccess = () => ({
    type: types.SAVE_POST_SUCCESS,
});

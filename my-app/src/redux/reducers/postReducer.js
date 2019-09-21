import * as types from '../actions/actionTypes';

const initialState = {
    posts: [],
    deletingPost: false,
    error: null
};

export default (state = initialState.posts, action) => {
    switch (action.type) {
        case types.LOAD_POSTS_SUCCESS:
            return action.posts;
            // return {
            //     ...state,
            //     ["user" + action.id]: [
            //         ...action.posts
            //     ]
            // };
        case types.DELETE_POST_SUCCESS:
            return state.filter(post => post.id !== action.id)
            // const newPosts = state['user' + action.userId].filter(post => post.id !== action.id);
            // return {
            //     ['user' + action.userId] : newPosts
            // };
        default:
            return state;
    }
}

export const postError = (state = initialState.error, action) => {
    switch(action.type) {
        case types.LOAD_POSTS_FAILED:
            return action.error;
        case types.LOAD_POSTS_SUCCESS:
            return null;
        default:
            return state
    }
}

export const deletingPost = (state = initialState.deletingPost, action) => {
    switch (action.type) {
        case types.DELETE_POST:
            return false;
        case types.DELETE_POST_SUCCESS:
            return true;
        case types.DELETE_POST_FINISHED:
            return false;
        case types.DELETE_POST_FAILED:
                return false;
        default:
            return state
    }
};
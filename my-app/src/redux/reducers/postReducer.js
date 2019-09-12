import * as types from '../actions/actionTypes';

const initialState = {
    posts: []
}

export default (state = initialState.posts, action) => {
    switch (action.type) {
        case types.LOAD_POSTS_SUCCESS:
            return {
                ...state,
                ["user" + action.id]: [
                    ...action.posts
                ]
            };
        // case types.LOAD_POSTS_SUCCESS:
        //     return action.posts;
        default:
            return state;
    }
}

import * as types from '../actions/actionTypes';

export default (state = false, action) => {
    switch (action.type) {
        case types.LOAD_POSTS:
            return false;
        case types.LOAD_POSTS_SUCCESS:
            return true;
        default:
            return state;
    }
}
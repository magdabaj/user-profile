import * as types from '../actions/actionTypes';

export default (state = null, action) => {
    switch (action.type) {
        case types.SET_ACTIVE_USER:
            return action.id;
        default:
            return state;
    }
}
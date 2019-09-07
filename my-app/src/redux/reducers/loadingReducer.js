import * as types from '../actions/actionTypes';

const loadingReducer = (state = false, action) => {
    switch(action.type) {
        case types.USERS_LOAD:
            return true;
        case types.USERS_LOAD_SUCCESS:
            return false;
        case types.USERS_LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;
import * as types from '../actions/actionTypes';

const initialState = {
    users: [],
};

export default (state = initialState.users , action) => {
    switch(action.type) {
        case types.USERS_LOAD_SUCCESS:
            return (action.users);
        default:
            return state;
    }
}
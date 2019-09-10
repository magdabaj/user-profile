import * as types from '../actions/actionTypes';

const initialState = {
    users: [],
};

export default (state = initialState.users , action) => {
    switch(action.type) {
        case types.USERS_LOAD_SUCCESS:
            return (action.users);
        case types.UPDATE_USER_SUCCESS:
            return (state.map(user =>
                user.id === action.user.id ? action.user : user
            ));
        case types.CREATE_USER_SUCCESS:
            return [
                ...state,
                {...action.user}
            ]
        default:
            return state;
    }
}
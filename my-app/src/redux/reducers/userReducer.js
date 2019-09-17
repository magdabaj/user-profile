import * as types from '../actions/actionTypes';

const initialState = {
    users: [],
    isDeleting: false,
};

export default (state = initialState.users , action) => {
    switch(action.type) {
        case types.USERS_LOAD_SUCCESS:
            return (action.users);
        case types.UPDATE_USER_SUCCESS:
            return state.map(user =>
                user.id === action.user.id ? action.user : user
            );
        case types.CREATE_USER_SUCCESS:
            return [...state, {...action.user}];

        case types.DELETE_USER_SUCCESS:
            return state.filter(user => user.id !== action.userId);
        default:
            return state;
    }
}


export const isDeleting = (state = initialState.isDeleting, action) => {
    switch(action.type) {
        case types.DELETE_USER:
            return false;
        case types.DELETE_USER_SUCCESS:
            return true;
        case types.DELETE_USER_FINISHED:
            return false;
        default:
            return state;
    }
}



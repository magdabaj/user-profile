import * as types from '../actions/actionTypes';

const initialState = {
    users: [],
    user: []
};

export default (state = initialState , action) => {
    switch(action.type) {
        case types.FETCH_USER:
            return{...state, loading: true};
        case types.USER_RECEIVED:
            return {...state, users: action.json, loading: false};
        default:
            return state;
    }
}
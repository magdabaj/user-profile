import * as types from '../actions/actionTypes';

const initialState = {
    newUser: {
        id: {
            name: '',
            value: null
        },
        dob: {
            date: ''
        },
        name: {
            first: '',
            last: ''
        },
        registered: {
            date: ''
        }
    },
};

export default (state = initialState.newUser , action) => {
    switch (action.type) {
        case types.SET_USER:
            return{
                ...state,
                newUser: action.user
            };
        default:
            return state
    }

}
import * as types from '../actions/actionTypes';

const initialState = {
    newUser: {
        company: {
            name: ''
        },
        email: '',
        id: null,
        name: '',
        phone: '',
        website: '',
    },
};

export default (state = initialState.newUser , action) => {
    switch (action.type) {
        case types.SET_USER:
            return{
                ...state,
                ...action.user
            };
        default:
            return state
    }

}
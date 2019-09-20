import * as types from '../actions/actionTypes';

const initialState = {
    newPost: {
        userId: null,
        id: null,
        title: '',
        body: ''
    }
};

export default (state=initialState.newPost, action) => {
    switch (action.type) {
        case types.SET_POST:
            return {...state,  ...action.post};
        default:
            return state;
    }
}
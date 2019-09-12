import * as types from '../actions/actionTypes';

const initialState = {
    users: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_USER:
            let newUsers = [
                ...state.users,
                {
                    ...action.user
                }
            ];
            return {
                ...state,
                users: newUsers
            };
        default:
            return state;
    }
}
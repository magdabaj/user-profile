import * as types from '../actions/actionTypes';

export default function userSaveSuccessReducer (state = false, action){
    switch (action.type) {
        case types.SAVE_USER:
            return false;
        case types.CREATE_USER_SUCCESS:
            return true;
        case types.UPDATE_USER_SUCCESS:
            return true;
        case types.SAVE_USER_SUCCESS:
            return false;
        default:
            return state;
    }
}
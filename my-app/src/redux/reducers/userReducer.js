import * as types from '../actions/actionTypes';

const initialState = {
    users: [],
};
//
// export default (state = initialState, action) => {
//     switch(action.type) {
//         case types.SAVE_USER:
//             let newUserList = [
//                 ...state.users,
//                 {
//                     ...action.user
//                 }
//             ];
//             return {
//                 ...state,
//                 users: newUserList
//             };
//         case types.USERS_LOAD_SUCCESS:
//             return {
//                 ...state,
//                 users: action.users
//             };
//         default:
//             return state;
//     }
// }
//

export default (state = initialState.users , action) => {
    switch(action.type) {
        case types.USERS_LOAD_SUCCESS:
            return action.users
        case types.UPDATE_USER_SUCCESS:
            return state.map(user =>
                user.id === action.user.id ? action.user : user
            );
        case types.SAVE_USER:
            // let newUsers = state.users.concat(action.user)
            return [...state, {...action.user}]
        default:
            return state;
    }
}


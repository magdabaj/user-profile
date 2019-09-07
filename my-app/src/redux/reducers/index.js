import users from './userReducer';
import loading from './loadingReducer';
import newUser from './newUserReducer'
import {combineReducers} from 'redux';

export default combineReducers({
    users,
    loading,
    newUser
})
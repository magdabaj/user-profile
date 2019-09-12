import users from './userReducer';
import loading from './loadingReducer';
import newUser from './newUserReducer'
import {combineReducers} from 'redux';
import userSaveSuccess from './userSaveSuccessReducer';
import posts from './postReducer';

export default combineReducers({
    users,
    loading,
    newUser,
    userSaveSuccess,
    posts
})
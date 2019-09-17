import users,{isDeleting} from './userReducer';
import loading from './loadingReducer';
import newUser from './newUserReducer'
import {combineReducers} from 'redux';
import userSaveSuccess from './userSaveSuccessReducer';
import posts from './postReducer';
import loadingPosts from './loadPostReducer';

export default combineReducers({
    users,
    loading,
    newUser,
    userSaveSuccess,
    posts,
    loadingPosts,
    isDeleting
})
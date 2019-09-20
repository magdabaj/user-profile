import users,{isDeleting} from './userReducer';
import loading from './loadingReducer';
import newUser from './newUserReducer'
import {combineReducers} from 'redux';
import userSaveSuccess from './userSaveSuccessReducer';
import posts,{deletingPost} from './postReducer';
import loadingPosts from './loadPostReducer';
import newPost from './newPostReducer';
import activeUser from './activeUserReducer';

export default combineReducers({
    users,
    loading,
    newUser,
    userSaveSuccess,
    posts,
    loadingPosts,
    isDeleting,
    deletingPost,
    newPost,
    activeUser
})
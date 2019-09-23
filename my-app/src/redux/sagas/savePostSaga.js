import * as types from '../actions/actionTypes';
import {updatePostSuccess, createPostSuccess, savePostSuccess} from "../actions/postActions";
import {take, fork, put, call} from 'redux-saga/effects';
import {savePostApi} from '../../api/postsApi';

export function* handlePostSave(post, userId) {
    try {
        const newPost = yield call(savePostApi, post, userId);
        if(post.id){
            yield put(updatePostSuccess(newPost));
        } else{
            yield put(createPostSuccess(newPost));
        }
    } catch(e) {}
}

export default function* watchPostSave() {
    while(true) {
        const {post, userId} = yield take(types.SAVE_POST);
        console.log('post, userId', post, userId);
        yield fork(handlePostSave, post, userId);

    }

}

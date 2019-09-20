import {deletePostSuccess, deletePostFailed, deletePostFinished} from "../actions/postActions";
import * as types from '../actions/actionTypes';
import {deletePostApi} from "../../api/postsApi";
import {takeEvery, call, put} from 'redux-saga/effects';

export function* handlePostDelete(action) {
    console.log('delete post saga', action);
    const post = action.post;
    try {
        const deletedData = yield call(deletePostApi, post.id);
        if(deletedData) {
            yield put(deletePostSuccess(post.id, post.userId));
            yield put(deletePostFinished());
        }
    } catch (e) {
        put(deletePostFailed(e, post))
    }
};

export default function* watchPostDelete() {
    console.log('delete post saga');
    yield takeEvery(types.DELETE_POST, handlePostDelete)

}
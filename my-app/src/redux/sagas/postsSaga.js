import * as types from "../actions/actionTypes";
import {take, fork, put, call} from 'redux-saga/effects';
import {fetchUserPosts} from "../../api/userApi";
import {loadUserPosts, loadUserPostsSuccess} from '../actions/postActions';

export function* handleUserPosts(userId) {
    try {
        yield put(loadUserPosts(userId));
        const res = yield call(fetchUserPosts, userId);
        yield put(loadUserPostsSuccess(userId, res));
    } catch(e) {}
}

export default function* watchUserSave() {
    while(true) {
        const {users} = yield take(types.USERS_LOAD_SUCCESS);

        for (let i = 0; i < users.length; i++) {
            yield fork(handleUserPosts, users[i].id);
        }
    }

}

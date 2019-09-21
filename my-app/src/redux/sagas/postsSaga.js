import * as types from "../actions/actionTypes";
import {take, fork, put, call, takeEvery} from 'redux-saga/effects';
import {fetchAllPosts} from "../../api/postsApi";
import {loadPostsSuccess, setPostError} from '../actions/postActions';

export function* handlePostsLoad() {

    try{
        const posts = yield call(fetchAllPosts);
        yield put(loadPostsSuccess(posts))
    } catch (error) {
        yield put(setPostError(error.toString()))
    }

}

export default function* watchUsersLoad() {
    yield takeEvery (types.LOAD_POSTS, handlePostsLoad);
}



//
// export function* handleUserPosts(userId) {
//     try {
//         yield put(loadUserPosts(userId));
//         const res = yield call(fetchUserPosts, userId);
//         yield put(loadUserPostsSuccess(userId, res));
//     } catch(e) {}
// }
//
// export default function* watchUserSave() {
//     while(true) {
//         const {users} = yield take(types.USERS_LOAD_SUCCESS);
//
//         for (let i = 0; i < users.length; i++) {
//             yield fork(handleUserPosts, users[i].id);
//         }
//     }
//
// }
//

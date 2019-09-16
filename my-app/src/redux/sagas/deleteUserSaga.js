import * as types from "../actions/actionTypes";
import {take, fork, takeEvery, put, call} from 'redux-saga/effects';
import {deleteUserApi, fetchUser} from "../../api/userApi";
import {updateUserSuccess, createUserSuccess, setUsers, setError} from '../actions/fetchActions';

export function* handleUserDelete(user) {
    console.log('deleting starts for', user.id);
    try {
        yield call(deleteUserApi, user.id);
    } catch(e) {}

    // try{
    //     const users = yield call(fetchUser);
    //     yield put(setUsers(users))
    // } catch (error) {
    //     yield put(setError(error.toString()))
    // }
}

export default function* watchUserDelete() {
    console.log('delete saga');
        // yield put(deleteUser(user));

        console.log('test while');
        const {user} = yield take(types.DELETE_USER);
        console.log('user', user);

        for (let i = 0; i < 3; i++) {
            yield fork(handleUserDelete, user);
            console.log(user.id)
        }


}
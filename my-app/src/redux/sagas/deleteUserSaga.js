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

export default function* watchUserSave() {
    console.log('delete saga');
    while(true) {
        // yield put(deleteUser(user));
        const {user} = yield take(types.DELETE_USER);
        console.log('user', user);
        yield fork(handleUserDelete, user);

    }
}
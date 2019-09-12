import * as types from '../actions/actionTypes';
import {fetchUser} from "../../api/userApi";
import {loadUsers, setError, setUsers} from "../actions/fetchActions";
import {call, put, takeEvery} from 'redux-saga/effects';

export function* handleUsersLoad() {

    // try{
    //     const users = yield call(fetchUser);
    //     yield put(setUsers(users))
    // } catch (error) {
    //     yield put(setError(error.toString()))
    // }

    // try{
        const users = yield call(fetchUser);
        yield put({type: types.USERS_LOAD_SUCCESS, users: users})
    // }

}


export function* testSaga() {
    console.log('test saga')
}


export default function* watchUsersLoad() {
    console.log('lol')
    yield takeEvery (types.USERS_LOAD, handleUsersLoad);
}



import * as types from '../actions/actionTypes';
import {fetchUser} from "../../api/userApi";
import {loadUsers, setError, setUsers} from "../actions/fetchActions";
import {call, put, takeEvery} from 'redux-saga/effects';

export function* handleUsersLoad() {
    try{
        const users = yield call(fetchUser);
        yield put(setUsers(users.results))
    } catch (error) {
        yield put(setError(error.toString()))
    }

}

export default function* watchUsersLoad() {
    yield takeEvery (types.USERS_LOAD, handleUsersLoad);
}
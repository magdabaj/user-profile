import * as types from "../actions/actionTypes";
import {takeEvery, put, call} from 'redux-saga/effects';
import {deleteUserApi} from "../../api/userApi";
import {deleteUserFinished, deleteUserSuccess} from '../actions/fetchActions';

export function* handleUserDelete(action) {
    console.log(action)
    const user = action.user
    console.warn('deleting starts for', user.id);
    try {
        console.log(user.id);
        const deletedData = yield call(deleteUserApi, user.id);
        if (deletedData) {
            yield put(deleteUserSuccess(user.id));
            yield put(deleteUserFinished());
        }
    //     todo handle failed
    } catch (e) {
        yield put({
            error: e.message,
            type: 'DELETE_USER_FAILED',
            id: user.id,

        })
    }
}

export default function* watchUserDelete() {
    console.warn('delete saga');
    yield takeEvery(types.DELETE_USER, handleUserDelete)
}
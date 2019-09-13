import usersSaga from './usersSaga';
import postsSaga from './postsSaga';
import saveUserSaga from './saveUserSaga';
import deleteUserSaga from './deleteUserSaga';
import {all} from 'redux-saga/effects';

export default function * rootSaga() {
    yield all([
        usersSaga(),
        saveUserSaga(),
        postsSaga(),
        deleteUserSaga()
    ])
}
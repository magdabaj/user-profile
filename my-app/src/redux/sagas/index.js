import usersSaga from './usersSaga';
import saveUserSaga from './saveUserSaga';
import {all} from 'redux-saga/effects';
import {testSaga} from './usersSaga';

export default function * rootSaga() {
    yield all([
        usersSaga(),
        saveUserSaga(),
        testSaga()
    ])
}
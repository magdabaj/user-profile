import * as types from "../actions/actionTypes";
import {take, fork, put, call} from 'redux-saga/effects';
import {saveUserApi} from "../../api/userApi";
import {updateUserSuccess, createUserSuccess, saveUserSuccess} from '../actions/fetchActions';

export function* handleUserSave(user) {
    try {
        const newUser = yield call(saveUserApi, user);
        if(user.id){
            yield put(updateUserSuccess(newUser));
        } else{
            yield put(createUserSuccess(newUser));
        }
    } catch(e) {}
}

export default function* watchUserSave() {
    while(true) {
        const {user} = yield take(types.SAVE_USER);
        console.log('user', user);
        yield fork(handleUserSave, user);

    }

}

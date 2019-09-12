import * as types from "../actions/actionTypes";
import {take, fork} from 'redux-saga/effects';

export function* handleUserSave(id) {
    console.log('fetching starts for', id);
}

export default function* watchUserSave() {
    console.log('hello saga');
    while(true) {

        const {users} = yield take(types.USERS_LOAD_SUCCESS);

        for (let i = 0; i < users.length; i++) {
            yield fork(handleUserSave, users[i].id);
        }
    }

}

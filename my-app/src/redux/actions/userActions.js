// import {all, put, takeLatest} from 'redux-saga/effects';
// import * as types from './actionTypes';
// import {fetchUser} from "../../api/userApi";
//
// export function* helloSaga() {
//     console.log('hello saga')
// }
//
// export function* fetchUser() {
//     const error = {};
//
//         const json = yield fetch('https://randomuser.me/api/?results=20')
//             .then(response => response.json())
//             .catch(error => ({error}));
//
//         if(json.results.length>0) //if(json.response)
//             yield put({type: types.USER_RECEIVED, json: json.results})
//         else
//             yield put({type: types.PRODUCTS_REQUEST_FAILED, error})
//
//
// }
//
//
// function* actionWatcher() {
//     yield takeLatest(types.FETCH_USER, fetchUser)
// }
//
// export default function* rootSaga() {
//     yield all([
//         actionWatcher(),
//         helloSaga()
//     ])
// }
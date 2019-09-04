import * as types from './actionTypes';

export const getUsers = () => ({
    type: types.FETCH_USER,
});

export const throwError = () => ({
    type: types.PRODUCTS_REQUEST_FAILED,
})
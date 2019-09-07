import * as types from './actionTypes';

export const setUsers = users => ({
    type: types.USERS_LOAD_SUCCESS,
    users
});

export const loadUsers = () => ({
    type: types.USERS_LOAD
});

export const setError = error => ({
    type: types.USERS_LOAD_FAIL,
    error
});

export const setUser = user => ({
    type: types.SET_USER,
    user
})

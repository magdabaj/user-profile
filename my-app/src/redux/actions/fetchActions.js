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
});

export const saveUser = user => ({
    type: types.SAVE_USER,
        user
});

export const saveUserSuccess = () => ({
    type: types.SAVE_USER_SUCCESS
});

export const createUserSuccess = user => ({
    type: types.CREATE_USER_SUCCESS,
    user
});

export const updateUserSuccess = user => ({
    type: types.UPDATE_USER_SUCCESS,
    user
});

export const deleteUser = user => ({
    type: types.DELETE_USER,
    user
});

export const deleteUserSuccess = userId => ({
    type: types.DELETE_USER_SUCCESS,
     userId
});

export const deleteUserFinished = () => ({
    type: types.DELETE_USER_FINISHED
});

export const setActiveUser = (id) => ({
    type: types.SET_ACTIVE_USER,
    id
})


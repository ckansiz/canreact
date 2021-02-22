import {
    put,
    call,
    takeEvery
} from 'redux-saga/effects'

import {
    SET_LOADING,
    GET_USERS,
    GET_USERS_REQUESTED
} from '../actions/user-action'

import {
    getAllUsers
} from '../api/user-api'

function* getUsers() {
    yield put({ type: SET_LOADING })

    const users = yield call(getAllUsers)

    yield put({ type: GET_USERS, payload: users })
}

export default function* userSaga() {
    yield takeEvery(GET_USERS_REQUESTED, getUsers)
}
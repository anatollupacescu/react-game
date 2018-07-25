import { call, put, takeEvery} from 'redux-saga/effects'
import {GET_DATA_REQUESTED} from "../action";
import axios from 'axios';

function* fetchUser() {
    try {
        const data = yield call(get, "http://localhost:3000/dummy", null, null);
        console.log("got response: %s", data);
        yield put({type: "GET_DATA", data});
    } catch (e) {
        console.log("got err: %s", e);
        yield put({type: "GET_DATA_FAILED", message: e.message});
    }
}

export function* mySaga() {
    yield takeEvery(GET_DATA_REQUESTED, fetchUser);
}

// const fetchBody = (url) => {
    // return axios.get(url)
        // .then(res => {
        //     console.log("got the result %s", res)
        // }).catch(err => {
        //     console.log("got the error %s", err)
    // });
// };

const request = (url, options) => axios.request({ ...options, url: url }).then(({ data }) => data);

const get = (path, params, headers) => request(path, { method: "GET", params, headers });
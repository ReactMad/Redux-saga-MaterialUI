import { all, put } from 'redux-saga/effects';
import * as T3dActions from './../actions';


export default function* rootSaga(getState) {
    yield all([
        yield put(T3dActions.setSetting())
    ]);
}

import { all } from 'redux-saga/effects';
import t3dSaga from './t3d/sagas';

export default function* rootSaga(getState) {
    yield all([
        t3dSaga()
    ])
};

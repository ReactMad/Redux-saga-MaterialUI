import { all } from 'redux-saga/effects';
import settingSagas from './setting.sagas';

export default function* rootSaga(getState) {
    yield all([
        settingSagas()
    ])
}
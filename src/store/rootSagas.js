import { all, call, spawn } from 'redux-saga/effects'
import { getMakesSaga, getModelsSaga } from './slices/cars/carsSaga';
// import * as carSaga from './slices/cars/'


export default function* rootSaga () {
  const sagas = [
    getMakesSaga,
    getModelsSaga,
  ];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );
}
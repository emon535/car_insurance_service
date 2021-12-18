import { all, fork } from 'redux-saga/effects'
import * as carSaga from './slices/cars/carsSaga'

const sagas = {
  ...carSaga,
}

export default  function* rootSaga() {
    yield all([ fork(sagas) ]);
  }
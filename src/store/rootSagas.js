import { all, call, spawn } from "redux-saga/effects";
import {
  getMakesSaga,
  getModelsSaga,
  getVehiclessSaga,
} from "./slices/cars/carsSaga";

export default function* rootSaga() {
  const sagas = [getMakesSaga, getModelsSaga, getVehiclessSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}

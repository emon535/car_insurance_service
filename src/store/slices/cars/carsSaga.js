import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchMakes,
  fetchModels,
  fetchVehicles,
} from "../../../apis/carApiService";
import {
  getMakesSagaAction,
  getModelsSagaAction,
  getVehiclesSagaAction,
} from "./carsActions";
import {
  getMakesReducer,
  getModelsReducer,
  getVehiclesReducer,
} from "./carsSlice";

function* getMakes() {
  try {
    const response = yield call(fetchMakes);
    yield put(getMakesReducer(response));
  } catch (exception) {
    console.log(exception);
  }
}

function* getModels(action) {
  try {
    const response = yield call(fetchModels, action.payload);
    yield put(getModelsReducer(response));
  } catch (exception) {
    console.log(exception);
  }
}

function* getVehicles(action) {
  console.log("Get Vehicles", action);
  try {
    const response = yield call(fetchVehicles, action.payload);
    yield put(getVehiclesReducer({response, "vehiclesDetails":action.payload}));
  } catch (exception) {
    console.log(exception);
  }
}

// Saga Action Dispatch

export function* getMakesSaga() {
  yield takeLatest(getMakesSagaAction, getMakes);
}

export function* getModelsSaga() {
  yield takeLatest(getModelsSagaAction, getModels);
}

export function* getVehiclessSaga() {
  yield takeLatest(getVehiclesSagaAction, getVehicles);
}

import { call ,put ,takeLatest} from 'redux-saga/effects'
import { fetchMakes, fetchModels } from '../../../apis/carApiService'
import { getMakesSagaAction, getModelsSagaAction } from './carsActions'
import {getMakesReducer,getModelsReducer} from "./carsSlice"

 function* getMakes() {
    console.log("Response===> ");
    try {
      const response = yield call(fetchMakes)
      yield put(getMakesReducer(response))
    } catch (exception) {
      console.log(exception)
    }
  }

 function* getModels() {
    console.log("Response===> ");
    try {
      const response = yield call(fetchModels)
      yield put(getModelsReducer(response))
    } catch (exception) {
      console.log(exception)
    }
  }

  // Saga Action Dispatch
  
  export function* getMakesSaga(){
    yield takeLatest(getMakesSagaAction, getMakes)
  }
  
  export function* getModelsSaga(){
    yield takeLatest(getModelsSagaAction, getModels)
  }
  
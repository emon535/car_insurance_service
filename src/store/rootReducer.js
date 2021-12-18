import { combineReducers } from '@reduxjs/toolkit'
import carsReducer, {
  reducerName as car
} from "./slices/cars/carsSlice"
/** reducers */

/** Initial reducers in the reducer registry */
const defaultReducers = {}
/** get reducers */
defaultReducers[car] = carsReducer

/** create method to combine reducers */
const createReducer = (injectedReducers = {}) => {
  return combineReducers({
    ...defaultReducers,
    ...injectedReducers,
  })
}

export default createReducer

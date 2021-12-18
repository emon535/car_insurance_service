import { combineReducers } from '@reduxjs/toolkit'

/** reducers */

/** Initial reducers in the reducer registry */
const defaultReducers = {}

/** get reducers */

/** create method to combine reducers */
const createReducer = (injectedReducers = {}) => {
  return combineReducers({
    ...defaultReducers,
    ...injectedReducers,
  })
}

export default createReducer

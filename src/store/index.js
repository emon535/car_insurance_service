import { configureStore } from '@reduxjs/toolkit'
import { createInjectorsEnhancer } from 'redux-injectors'
import createSagaMiddleware from 'redux-saga'
import createReducer from './rootReducer'
import rootSaga from './rootSagas'


/** method to create store */
const configureAppStore = (initialState = {}) => {
  const reduxSagaMonitorOptions = {}
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)

  const { run: runSaga } = sagaMiddleware

  /** setup redux-injectors to load reducers dynamically*/
  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ]

  const store = configureStore({
    reducer: createReducer(),
    /** setup redux toolkit to use saga instead of thunk */
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({ thunk: false }),
      sagaMiddleware,
    ],
    preloadedState: initialState,
    devTools: true,
    enhancers,
  })

  sagaMiddleware.run(rootSaga)
  return store
}

/** initialize the root store */
const rootStore = configureAppStore()

/** export the default root store  */
export default rootStore

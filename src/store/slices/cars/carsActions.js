import { createAction } from '@reduxjs/toolkit'
export const getMakesSagaAction = createAction(
    `API/GET_MAKES`
  )
  
//   const authRequest = createAction(AUTH_REQUEST, (login, password) => ({ login, password }));

  export const getModelsSagaAction = createAction(
    `API/GET_MODELS`
  )
  
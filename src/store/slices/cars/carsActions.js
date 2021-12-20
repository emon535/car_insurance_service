import { createAction } from '@reduxjs/toolkit'
export const getMakesSagaAction = createAction(
    `API/GET_MAKES`
  )
  
  export const getModelsSagaAction = createAction(
    `API/GET_MODELS`
  )
  
  export const getVehiclesSagaAction = createAction(
    `API/GET_VEHICLES`
  )
  
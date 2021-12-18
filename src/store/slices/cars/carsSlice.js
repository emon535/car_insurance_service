import { createSlice } from '@reduxjs/toolkit';
export const selectMakes = (state) => state.cars.makes;
export const selectModels = (state, make) => state.cars.models[make];
export const reducerName = 'cars'

const generateVehiclesKey = (make, model) => `${make}/${model}`;
export const selectVehicles = (state, make, model) => state.cars.vehicles[generateVehiclesKey(make, model)];


export const carsSlice = createSlice({
  name: reducerName,
  initialState: {
    areMakesFetching: false,
    areModelsFetching: false,
    areVehiclesFetching: false,
    makesError: null,
    modelsError: null,
    vehiclesError: null,
    makes: null,
    models: {},
    vehicles: {},
  },
  reducers: {
    getMakesReducer(state, action) {
      return {...state , makes: action.payload}
    },
    getModelsReducer(state,action) {
      console.log(action)
      return {...state , models: action.payload}

    }
  },
});


export default carsSlice.reducer;
export const { getMakesReducer, getModelsReducer } = carsSlice.actions


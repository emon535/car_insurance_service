import { createSlice } from "@reduxjs/toolkit";

export const reducerName = "cars";

const vehilesKeys = (make, model) => `${make}/${model}`;
export const selectVehicles = (state, make, model) => state.cars.vehicles[vehilesKeys(make,model)];

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
    getMakesReducer(state, {payload}) {
      return { ...state, makes: payload };
    },
    getModelsReducer(state, {payload}) {
      return { ...state, models: payload };
    },
    getVehiclesReducer(state, {payload}) {
      console.log("getVehiclesReducer payload",payload);
      const vehiclesDetailsString = `${payload.vehiclesDetails.make}/${payload.vehiclesDetails.model}`
      console.log("vehiclesDetailsString",vehiclesDetailsString);
      return { ...state, vehicles:{[`${vehiclesDetailsString}`]: payload.response }};
    },
  },
});

// Selectors
export const selectMakes = (state) => state.cars.makes;
export const selectModels = (state) => state.cars.models;

export default carsSlice.reducer;
export const { getMakesReducer, getModelsReducer, getVehiclesReducer } =
  carsSlice.actions;

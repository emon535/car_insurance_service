import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVehiclesSagaAction } from "../../store/slices/cars/carsActions";
import { selectVehicles } from "../../store/slices/cars/carsSlice";

const Vehicles = () => {
  const dispatch = useDispatch();
  let { make, model } = useParams();
  const vehicles = useSelector(state => selectVehicles(state, make, model));

  const loadVehicles = useCallback(() => {
    dispatch(getVehiclesSagaAction({make, model}));
  }, [dispatch]);

  useEffect(() => {
    console.log("Calling load vehicles", vehicles);
    loadVehicles();
  },[]);

  console.log("Vehicles", vehicles);
  return (
    <>
      Vehicles
    </>
  );
};

export default Vehicles;

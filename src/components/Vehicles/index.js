import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
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
    loadVehicles();
  },[]);

  // console.log("Vehicles", vehicles);
  return (
    <>
      Vehicles Component
      {vehicles?.length > 0 &&
    vehicles.map((vehicle, index) => {
      console.log(vehicle)
      return (
        <li key={index}>
          <Link key={model} >{vehicle[0].bodyType}</Link>
        </li>
      );
    })}
    </>
  );
};

export default Vehicles;

import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import { getMakesSagaAction } from "../../store/slices/cars/carsActions";
import { selectMakes } from "../../store/slices/cars/carsSlice";
import Models from "../Models";

const Vehicles = () => {
  const makes = useSelector(selectMakes);
  const dispatch = useDispatch();

  const loadMakes = useCallback(() => {
    dispatch(getMakesSagaAction());
  }, [dispatch]);

  useEffect(() => {
    console.log("Calling loadmakes");
    loadMakes();
  },[]);

  console.log("MAKES", makes);
  return (
    <>
      Vehicles
    </>
  );
};

export default Vehicles;

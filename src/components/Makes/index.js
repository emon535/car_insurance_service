import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import { getMakesSagaAction } from "../../store/slices/cars/carsActions";
import { selectMakes } from "../../store/slices/cars/carsSlice";
import Models from "../Models";
import { Outlet } from 'react-router-dom';

const Makes = () => {
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
      {makes?.length > 0 &&
        makes.map((make, index) => {
          return (
            <li key={index}>
              <Link key={make} to={`/models/${make}`}>
                {make}
              </Link>
            </li>
          );
        })}
      <Outlet/>
    </>
  );
};

export default Makes;

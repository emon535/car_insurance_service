import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, Route, Routes, useLocation, useParams } from "react-router-dom";
import { getMakesSagaAction, getModelsSagaAction } from "../../store/slices/cars/carsActions";
import { getModelsSaga } from "../../store/slices/cars/carsSaga";
import { selectMakes, selectModels } from "../../store/slices/cars/carsSlice";
import Vehicles from "../Vehicles";


const Models = () => {
  const dispatch = useDispatch();
  const { make } = useParams();

  // const models = useSelector((state, make) => state.cars.models[make]);
  const models = useSelector(selectModels);

  console.log("Model List",models)


  const loadModels = useCallback(() => {
    if (make) {
      console.log("make", make);
      dispatch(getModelsSagaAction(make));
    }
  }, [dispatch, make]);


  useEffect(() => {
    loadModels();
  }, [loadModels]);

  return  <>
  MODELS : 
  {models?.length > 0 &&
    models.map((model, index) => {
      return (
        <li key={index}>
          <Link key={model}  to={`/models/${make}/${model}`}>{model}</Link>
        </li>
      );
    })}
  <Outlet/>
</>
};

export default Models;

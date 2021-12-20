import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import { getVehiclesSagaAction } from "../../store/slices/cars/carsActions";
import { selectVehicles } from "../../store/slices/cars/carsSlice";
import { CardsWrapper, CustomLink, SectionHeader } from "../../styles/commonStyledComponents";
import { VehicleCard } from "./elements";

const Vehicles = () => {
  const dispatch = useDispatch();
  let { make, model } = useParams();
  const vehicles = useSelector(state => selectVehicles(state, make, model));
  let [selectedVehicles , setSelectedVehicles] = useState("")
  const loadVehicles = useCallback(() => {
    dispatch(getVehiclesSagaAction({make, model}));
  }, [dispatch]);

  useEffect(() => {
    loadVehicles();
  },[]);

  const getSelectedInformation=(e)=>{
    e.preventDefault()
    console.log("vehicle index", e.target.value)
    setSelectedVehicles( e.target.value);
  }
  console.log("Vehicles", vehicles,selectedVehicles);
  return (<>
  <SectionHeader>Vehicles</SectionHeader>
    <CardsWrapper>
      {selectedVehicles}
  {vehicles?.length > 0 &&
    vehicles.map((vehicle, index) => {
      return (
        <VehicleCard key={index}>
          <CustomLink key={index} to="" onClick={e=>getSelectedInformation(e)} > <span>Body Type: {vehicle.bodyType}</span>
          <h6>Engine PowerKW : {vehicle.enginePowerKW}</h6>
          <h6>Fuel Type: {vehicle.fuelType}</h6>
          <h6>Engine Engine Capacity : {vehicle.engineCapacity}</h6>
          </CustomLink>
        </VehicleCard>
      );
    })}
     
  </CardsWrapper>
  </>
  );
};

export default Vehicles;

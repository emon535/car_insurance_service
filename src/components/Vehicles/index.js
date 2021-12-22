import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getVehiclesSagaAction } from "../../store/slices/cars/carsActions";
import { selectVehicles } from "../../store/slices/cars/carsSlice";
import {
  CardsWrapper,
  CustomLink,
  RightButton,
  SectionHeader,
} from "../../styles/commonStyledComponents";
import { VehicleCard } from "./elements";
import Vehicle from "./Vehicle";

const Vehicles = () => {
  const dispatch = useDispatch();
  let { make, model } = useParams();
  const vehicles = useSelector((state) => selectVehicles(state, make, model));
  const [selectedVehicles, setSelectedVehicle] = useState(null);

  const loadVehicles = useCallback(() => {
    dispatch(getVehiclesSagaAction({ make, model }));
  }, [dispatch]);

  useEffect(() => {
    loadVehicles();
  }, []);

  const getSelectedInformation = (e, index) => {
    e.preventDefault();
    setSelectedVehicle(getVehicleFromIndex(index));
  };

  const getVehicleFromIndex = (index) => {
    return vehicles ? JSON.parse(JSON.stringify(vehicles[index])) : "";
  };

  return (
    <>
      <SectionHeader>Vehicles</SectionHeader>
      {selectedVehicles ? (
        <Link to={`/models/${make}/${model}`}>
          <RightButton onClick={() => setSelectedVehicle(null)}>
            Select another
          </RightButton>
        </Link>
      ) : (
        <CardsWrapper>
          {vehicles?.length > 0 ?
            vehicles.map((vehicle, index) => {
              return (
                <VehicleCard key={index}>
                  <CustomLink
                    key={index}
                    to=""
                    onClick={(e) => getSelectedInformation(e, index)}
                  >
                    <span>Body Type: {vehicle.bodyType}</span>
                    <h6>Engine PowerKW : {vehicle.enginePowerKW}</h6>
                    <h6>Fuel Type: {vehicle.fuelType}</h6>
                    <h6>Engine Engine Capacity : {vehicle.engineCapacity}</h6>
                  </CustomLink>
                </VehicleCard>
              );
            }):<p>No Vehicle to select. Try selecting another Make or</p>}
        </CardsWrapper>
      )}

      {selectedVehicles ? <Vehicle selectedVehicles={selectedVehicles} /> : ""}
    </>
  );
};

export default Vehicles;

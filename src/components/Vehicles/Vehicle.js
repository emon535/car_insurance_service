const Vehicles = (props) => {
  let {
    bodyType,
    engineCapacity,
    enginePowerKW,
    enginePowerPS,
    fuelType,
    make,
    model,
  } = props?.selectedVehicles;
  return (
    <>
      {props.selectedVehicles ? (
        <div>
          Engine Capacity : {engineCapacity}
          <br></br>
          BodyType : {bodyType}
          <br></br>
          Engine Power (KW) : {enginePowerKW}
          <br></br>
          Engine Power (PS ): {enginePowerPS}
          <br></br>
          Fuel Type : {fuelType}
          <br></br>
          Company : {make}
          <br></br>
          Model : {model}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Vehicles;

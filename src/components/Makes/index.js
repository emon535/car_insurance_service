import { useCallback, useEffect } from "react";
import { FaCarSide } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { RightButton } from "../../pages/Home/elements";
import { getMakesSagaAction } from "../../store/slices/cars/carsActions";
import { resetStateReduccer, selectMakes } from "../../store/slices/cars/carsSlice";
import {
  Card,
  CardsWrapper,
  CustomLink,
  SectionHeader
} from "../../styles/commonStyledComponents";

const Makes = () => {
  const makes = useSelector(selectMakes);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const match = pathname.match(/models\/([\w\s]*)/);
  const make = match ? match[1] : null;
  const loadMakes = useCallback(() => {
    dispatch(getMakesSagaAction());
  }, [dispatch]);

  const resetState = useCallback(()=>{
    dispatch(resetStateReduccer())
  }, [dispatch])

  useEffect(() => {
    console.log("Calling loadmakes");
    loadMakes();
  }, []);

  console.log("MAKES", makes);
  return (
    <>
      <SectionHeader>
        {" "}
        <FaCarSide /> MAKES {make ? ": " + make : ""}
        {makes?.length >= 0 ? (
          ""
        ) : (
          <RightButton onClick={loadMakes}>Refresh</RightButton>
        )}
        {make ? (
          <>
            <Link to={"/"}>
              <RightButton onClick={resetState}>Reset</RightButton>
            </Link>
          </>
        ) : (
          <>
            <CardsWrapper>
              {makes?.length > 0 &&
                makes.map((make) => {
                  return (
                    <CustomLink key={make} to={`/models/${make}`}>
                      <Card> {make}</Card>
                    </CustomLink>
                  );
                })}
            </CardsWrapper>
          </>
        )}
      </SectionHeader>
      <Outlet />
    </>
  );
};

export default Makes;

import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet, useLocation,
  useParams
} from "react-router-dom";
import {
  getModelsSagaAction
} from "../../store/slices/cars/carsActions";
import { selectModels } from "../../store/slices/cars/carsSlice";
import {
  Card,
  CardsWrapper,
  CustomLink,
  RightButton,
  SectionHeader
} from "./../../styles/commonStyledComponents";

const Models = () => {
  const dispatch = useDispatch();
  const { make } = useParams();
  const { pathname } = useLocation();

  const match = pathname.match(/models\/(.*)\/(.*)/);
  const model = match ? match[2] : null;
  const models = useSelector(selectModels);

  console.log("Model List", models);

  const loadModels = useCallback(() => {
    if (make) {
      console.log("make", make);
      dispatch(getModelsSagaAction(make));
    }
  }, [dispatch, make]);

  useEffect(() => {
    loadModels();
  }, [loadModels]);

  return (
    <>
      <SectionHeader>
        Models {model ? ": " + model : ""}
        {models?.length > 0 ? (
          ""
        ) : (
          <RightButton onClick={loadModels}>Refresh</RightButton>
        )}
        {model ? (
          <>
            <Link to={`/models/${make}/`}>
              <button>Reset</button>
            </Link>
          </>
        ) : (
          <>
            <CardsWrapper>
              {models?.length > 0 &&
                models.map((model, index) => {
                  return (
                    <Card key={index}>
                      <CustomLink key={model} to={`/models/${make}/${model}`}>
                        {model}
                      </CustomLink>
                    </Card>
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

export default Models;

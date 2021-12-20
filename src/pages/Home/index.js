import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppHeader, MainWrapper } from "./elements";
import PropTypes from "prop-types";
import Makes from "../../components/Makes";
import Models from "../../components/Models";
import Vehicles from "../../components/Vehicles";
import {CenteredText} from "./elements"

const Header = ({ title }) => (
  <AppHeader>
    <h3> {title}</h3>
  </AppHeader>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const Homepage = () => (
  <>
    <Header title="FRIDAY - Car Insurance Service" />
    <MainWrapper>
      <CenteredText> Please select a car to register:</CenteredText>
      <Router>
        <Routes>
        <Route path="/" element={<Makes />}>
          <Route path="/models/:make" element={<Models />} >
          <Route path="/models/:make/:model" element={<Vehicles />} />
          </Route>
        </Route>
        </Routes>
      </Router>
    </MainWrapper>
  </>
);

export default Homepage;

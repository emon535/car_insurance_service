import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppHeader } from "./elements";
import PropTypes from "prop-types";
import Makes from "../../components/Makes";
import Models from "../../components/Models";
import Vehicles from "../../components/Vehicles";

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
    <main>
      Please select a car to register:
      <Router>
        <Routes>
        <Route path="/" element={<Makes />}>
          <Route path="/models/:make" element={<Models />} >
          <Route path="/models/:make/:model" element={<Vehicles />} />
          </Route>
        </Route>
        </Routes>
      </Router>
    </main>
  </>
);

export default Homepage;

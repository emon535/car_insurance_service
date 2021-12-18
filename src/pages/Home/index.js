import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AppHeader, CenterText } from './elements';
import PropTypes from 'prop-types';


const Header = ({ title }) => (
    <AppHeader >
       <h3 > {title}</h3>
    </AppHeader>
  );

  Header.propTypes = {
    title: PropTypes.string.isRequired,
  };
  

const Homepage = () => (
  <Router>
      <Header title="FRIDAY - Car Insurance Service"/>
    <main >
        Please select a car to register:
    </main>
  </Router>
);

export default Homepage;

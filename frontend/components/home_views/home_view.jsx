import React from 'react';
import {Component} from 'react';

// Components
import HeaderBar from '../general/header_bar';

// Forms
import DrinkForm from './forms/drink_form';


class HomeView extends Component {

  // ==================================================
  // Initialize
  // ==================================================

  // ==================================================
  // Methods
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  render() {
    return (
      <div className="home-container">
        <HeaderBar />
        <DrinkForm />
      </div>
    );
  }

};

export default HomeView;

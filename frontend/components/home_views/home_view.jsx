import React from 'react';
import {Component} from 'react';

// Components
import HeaderBar from '../general/header_bar';


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
      </div>
    );
  }

};

export default HomeView;

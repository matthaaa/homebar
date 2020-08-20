import React from 'react';
import PropTypes from 'prop-types';
import {Component} from 'react';


class DrinkResultsView extends Component {

  // ==================================================
  // Initialize
  // ==================================================

  // ==================================================
  // Methods
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  
  renderDrinkListItem(drinkData) {
    console.log(drinkData);
    const { idDrink, strDrink } = drinkData;
    console.log(strDrink);
    
    return (
      <li id={idDrink}><p>{strDrink}</p></li>
    );
  }

  renderDrinkList(drinks) {
    const drinkList = Object.values(drinks);
    const drinkListItems = drinkList.map(drink => 
      this.renderDrinkListItem(drink)
    );

    return(
      <ul>
        {drinkListItems};
      </ul>
    );
  }
  
  render() {
    const { drinks } = this.props;
    const drinksKeysList = Object.keys(drinks);

    return drinksKeysList.length === 0 ? null : this.renderDrinkList(drinks);
  }

};

DrinkResultsView.propTypes = {
  drinks: PropTypes.object.isRequired,
};

export default DrinkResultsView;

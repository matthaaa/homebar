import React from 'react';
import PropTypes from 'prop-types';
import {Component} from 'react';

// Components
import HeaderBar from '../general/header_bar';
import DrinkResultsView from './drink_results_view';
// Forms
import DrinkForm from './forms/drink_form';


class HomeView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.state = {
      ingredient: "",
      // TODO: Convert glass input to snake format before sending request.
      glass: "",
      showResults: false,
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // ==================================================
  // Lifecycle
  // ==================================================
  componentDidMount() {
    // this.props.clearErrors();
  }

  // ==================================================
  // Methods
  // ==================================================
  handleUpdate(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.requestDrinksByIngredient(this.state.ingredient);
    this.setState({ showResults: true });
  }

  // ==================================================
  // Render
  // ==================================================
  renderResults() {
    return (
      <DrinkResultsView drinks={this.props.drinks} />
    );
  }

  render() {
    console.log(this.props);
    return (
      <div className="home-container">
        <HeaderBar />
        <div className="home-view-body">
          <DrinkForm
            ingredient={this.state.ingredient}
            glass={this.state.glass}
            onUpdate={this.handleUpdate}
            onSubmit={this.handleSubmit}
          />
        </div>
        <div className="footer">
          <p>Powered by</p>
          <a href="https://www.thecocktaildb.com/api.php">
            The Cocktail Database
          </a>
        </div>
        {this.state.showResults ? this.renderResults() : null}
      </div>
    );
  }

};

HomeView.propTypes = {
  requestDrinksByIngredient: PropTypes.func.isRequired,
};

export default HomeView;

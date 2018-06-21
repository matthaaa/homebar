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
  constructor(props) {
    super(props);
    this.state = {
      ingredient: "",
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
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    console.log(this.props);
    return (
      <div className="home-container">
        <HeaderBar />
        <DrinkForm
          ingredient={this.state.ingredient}
          onUpdate={this.handleUpdate}
          onSubmit={this.handleSubmit}
        />
      <div className="footer">
        <p>Powered by</p>
        <a href="https://www.thecocktaildb.com/api.php">
          The Cocktail Database
        </a>
      </div>
      </div>
    );
  }

};

export default HomeView;

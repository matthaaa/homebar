import React from 'react';
import {Component} from 'react';
import anime from 'animejs'

// Components
import FormInput from '../../general/forms/form_input';


class DrinkForm extends Component {

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
    const {ingredient, onUpdate, onSubmit} = this.props;

    return (
      <div className="drink-form-container">
        <FormInput
          placeholder={"Enter an ingredient!"}
          contentClassName={"ingredient-input"}
          value={ingredient}
          onChange={onUpdate('ingredient')}
        />
        <button
          onClick={onSubmit}>
          Submit
        </button>
      </div>
    );
  }

};

export default DrinkForm;

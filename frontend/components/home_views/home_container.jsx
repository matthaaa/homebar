import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestDrinksByIngredient} from '../../actions/drink_actions';

// Components
import HomeView from './home_view';


const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestDrinksByIngredient: (ingredient) => dispatch(
    requestDrinksByIngredient(ingredient),
  ),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView));

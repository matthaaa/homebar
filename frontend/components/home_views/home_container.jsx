import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import HomeView from './home_view';


const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView));

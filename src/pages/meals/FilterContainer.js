import { connect } from 'react-redux';
import component from './Filter';

const mapStateToProps = (state, ownProps) => {
  return {
    labels: state.mealsReducer.labels 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
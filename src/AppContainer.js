import { connect } from 'react-redux';
import component from './App';

const mapStateToProps = (state, ownProps) => {
  return { 
    numberOfMeals: state.mealsReducer.meals.length 
  }
}

const mapDispatchToProps = (dispatch) => {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
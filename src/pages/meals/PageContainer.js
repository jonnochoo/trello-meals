import { connect } from 'react-redux';
import component from './Page';
import { fetchMeals, fetchMealsSuccess } from './actions';

const mapStateToProps = (state, ownProps) => {
  console.log(state.mealsReducer.isLoading)
  return {
    isLoading: state.mealsReducer.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {    
    loadMeals: () => {
      dispatch(fetchMeals()).then((response) => {
        dispatch(fetchMealsSuccess(response.payload))
      })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
import { connect } from 'react-redux'
import component from './MealsTable'

const mapStateToProps = (state, ownProps) => {
  return { 
    meals: state.mealsReducer.meals 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
import { connect } from 'react-redux'
import component from './FilterButton'
import { filterMeals } from './actions'

const mapStateToProps = (state, ownProps) => {
  return {
    label: ownProps.label,
    isActive: ownProps.label === state.mealsReducer.filterBy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick : (filter) => {
      dispatch(filterMeals(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
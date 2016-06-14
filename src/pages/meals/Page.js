import React, { PropTypes, Component } from 'react'
import MealsTableContainer from './MealsTableContainer'
import FilterContainer from './FilterContainer'
import Loading from './../../components/loading'

class Page extends Component {  
  componentWillMount() {
    this.props.loadMeals()
  }

  render() {
    if(this.props.isLoading) {
      return <Loading />
    }
    else {
      return (
        <div>
          <FilterContainer />
          <MealsTableContainer />
        </div>  
      )
    }
  }
}

Page.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadMeals: PropTypes.func.isRequired
}

export default Page

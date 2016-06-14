import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const App = ({numberOfMeals, children}) => (
    <div>
      <div className="row">
        <div className="columns">
          <h1><i className="fa fa-cutlery"/ > Trello Meals ({numberOfMeals})</h1>
        </div>
      </div>
      <div className="row">
        {children}
      </div>
    </div>
  )
  
App.propTypes = {
  numberOfMeals: PropTypes.number.isRequired
}

export default App

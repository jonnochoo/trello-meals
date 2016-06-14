import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Meals from './pages/meals/PageContainer'
import Test from './pages/test/page'
import AppContainer from './AppContainer'

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={Meals}/>
    <Route path="test" component={Test} />
  </Route>
)

import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Main from 'pages/Main'
import Detail from 'pages/Detail'
import NotFound from 'pages/NotFound'

const routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <Route path='character/:id' component={Detail} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
)

export default routes

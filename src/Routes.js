import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Main from 'pages/Main'
import Detail from 'pages/Detail'
import NotFound from 'pages/NotFound'

export default class Routes extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Main} />
        <Route path='/character/:id' component={Detail} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
}

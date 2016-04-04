import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Main from './pages/Main'

export default class Routes extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Main} />
      </Router>
    )
  }
}

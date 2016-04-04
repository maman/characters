import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './routes'
import configureStore from 'data/store'

import 'normalize.css/normalize.css'

const store = configureStore()
const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  rootElement
)

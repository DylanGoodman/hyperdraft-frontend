import './static/defaults.css'
import './static/odometer.min.css'
import './static/range.css'
import './semantic/dist/semantic.min.css'
import 'toastr/build/toastr.css'
import 'jquery-ui'
import './util/libs'

import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import { App } from './containers'

const initialState = window.__INITIAL_STATE__
const app = document.getElementById('app')
const history = createHistory()
const store = configureStore(initialState, history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  app
)

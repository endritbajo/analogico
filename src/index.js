import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Sequencer module
import reducer from './sequencer/reducers'
import * as actions from './sequencer/actions'
import Sequencer from './sequencer'

import './assets/styles/base.css'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <Sequencer />
  </Provider>,
  document.getElementById('root')
)

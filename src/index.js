import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import * as actions from './actions'
import App from './components/App'
import Board from './components/Board'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <App>
      <Board height={5000} width={5000} />
    </App>
  </Provider>,
  document.getElementById('root')
)

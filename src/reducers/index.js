import { combineReducers } from 'redux'
import nodes from './nodes'
import connections from './connections'

const rootReducer = combineReducers({
  nodes,
  connections
})

export default rootReducer

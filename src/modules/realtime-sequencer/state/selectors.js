import { createSelector } from 'reselect'
import { NAME } from '../constants'

const getControllers = createSelector(
  state => state[NAME].controllers,
  controllers => controllers
)

const getLoops = createSelector(
  state => state[NAME].loops,
  loops => loops
)

const getState = createSelector(
  state => state[NAME].state,
  state => state
)

export default { getControllers, getLoops, getState }

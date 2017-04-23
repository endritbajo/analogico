import { createSelector } from 'reselect'
import { NAME } from '../constants'

const getPads = createSelector(
  (state, props) => state[NAME][props.controllerId].pads,
  pads => pads
)

const getAllPadControllers = createSelector(
  state => state[NAME],
  controllers => Object.keys(controllers)
)

export default { getPads, getAllPadControllers }

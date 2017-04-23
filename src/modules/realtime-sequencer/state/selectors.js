import { createSelector } from 'reselect'
import { NAME } from '../constants'

const getTrack = createSelector(
  state => state[NAME].track,
  track => track
)

const getState = createSelector(
  state => state[NAME].state,
  state => state
)

export default { getTrack, getState }

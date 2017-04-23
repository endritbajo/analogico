import types from './actionTypes'
import { State } from '../constants'
// Reducer
const initialState = {
  state: State.STOPPED,
  track: [],
  recordingStartTime: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PLAY:
      return Object.assign({}, state, { state: State.PLAYING })
    case types.PAUSE:
      return Object.assign({}, state, { state: State.PAUSED })
    case types.STOP:
      return Object.assign({}, state, { state: State.STOPPED })
    case types.START_RECORDING:
      return Object.assign({}, state, {
        state: State.RECORDING,
        track: [],
        recordingStartTime: action.payload.time
      })
    case types.STOP_RECORDING:
      return Object.assign({}, state, {
        state: State.STOPPED,
        recordingStartTime: 0
      })
    case types.RECORD:
      if (state.state !== State.RECORDING) {
        return state;
      }
      const { instrument, time } = action.payload
      const diffTime = (time - state.recordingStartTime) / 1000
      return Object.assign({}, state, {
        track: [...state.track, { instrument, time: diffTime }]
      })
    default:
      return state
  }
}

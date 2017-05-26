import types from './actionTypes'
import { State } from '../constants'

// Reducer
const initialState = {
  state: State.STOPPED,
  controllers: [{
    id: '1',
    name: 'Pad 1'
  }, {
    id: '2',
    name: 'Pad 2'
  }],
  loops: {
    '1': [],
    '2': [],
  },
  recordingStartTime: 0
}

const clearLoops = (loops) => {
  return Object.keys(loops).reduce((acc, curr) => {
    acc[curr] = [];
    return acc;
  }, {});
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
        loops: clearLoops(state.loops),
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
      const { controllerId, hit } = action.payload
      const { instrument, time } = hit
      const diffTime = (time - state.recordingStartTime) / 1000
      const loop = state.loops[controllerId] || []
      const newLoop = [...loop, { instrument, time: diffTime }]
      const newTrack = Object.assign({}, state.loops, {
        [controllerId]: newLoop
      })
      return Object.assign({}, state, { loops: newTrack })
    default:
      return state
  }
}

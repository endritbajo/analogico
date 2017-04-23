import types from './actionTypes'
import { samples } from 'common/audio'

const initialState = {
  '1': {
    pads: samples.map((sample, i) => ({ id: i, label: sample.label, sound: sample.src })),
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PAD:
      const { controllerId, pad } = action.payload
      const controller = state[NAME][controllerId]
      const newPads = [...controller.pads, pad]
      const newController = Object.assign({}, controller, { pads: newPads })
      return Object.assign({}, state, { [controllerId]: newController })
    default:
      return state
  }
}

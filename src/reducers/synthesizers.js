import { SET_SYNTH_VALUES } from '../constants/ActionTypes'

const initialState = [{
  id: 1,
  values: {
    frequency: 10,
    amplitude: 30
  }
}]

const addConnector = (node, { id, dx, dy }) => {
  const connectors = node.connectors
  return Object.assign({}, node, {
    connectors: [
      ...connectors,
      { id, dx, dy }
    ]
  })
}

const setValues = (currValues, nextValues) => {
  return Object.assign({}, currValues, nextValues)
}

const translate = (position, { dx, dy }) => ({
  x: position.x + dx,
  y: position.y + dy
})

export default function synthesizers(state = initialState, action) {
  switch (action.type) {
    case SET_SYNTH_VALUES:
      const index = state.findIndex(synth => synth.id === action.synthId)
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], { values: setValues(state[index].values, action.values) }),
        ...state.slice(index + 1)
      ]
    default:
      return state
  }
}

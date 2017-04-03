import { createSelector } from 'reselect'
import { NAME } from './constants'

const LOAD = 'controllers/LOAD'
const SET_PRESSED_INPUT = 'controllers/SET_PRESSED_INPUT'

// Actions
const load = (padId, sound) => ({
  type: LOAD,
  payload: { padId, sound }
});

const setPressedInput = (controllerId, inputId, pressed) => ({
  type: SET_PRESSED_INPUT,
  payload: { controllerId, inputId, pressed }
})

export const actions = { load, setPressedInput }

// Reducer
const data = [
  {
    id: '1',
    sound: {
      label: 'kick',
      src: require('assets/audio/kicks/kick.wav'),
    }
  },
  {
    id: '2',
    sound: {
      label: 'snare',
      src: require('assets/audio/snares/snare.wav'),
    }
  },
  {
    id: '3',
    sound: {
      label: 'hat',
      src: require('assets/audio/hats/hat.wav'),
    }
  },
]

const initialState = {
  '1': {
    type: 'pad-controller',
    data: data,
    pressedInputs: []
  }
}


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const { padId, sound } = action.payload
      const index = state.findIndex(b => b.id == padId)
      const copiedSound = Object.assign({}, sound)
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], { sound: copiedSound }),
        ...state.slice(index + 1)
      ]
    case SET_PRESSED_INPUT:
      const { controllerId, inputId, pressed } = action.payload
      const controller = state[controllerId]
      let pressedInputs = controller.pressedInputs;
      if (pressed) {
        const newArray = [...controller.pressedInputs, inputId]
        pressedInputs = [...new Set(newArray)]
      } else {
        pressedInputs = pressedInputs.filter(id => id !== inputId)
      }
      const newController = Object.assign({}, controller, { pressedInputs })
      return Object.assign({}, state, { [controllerId]: newController })
    default:
      return state
  }
}

// Selectors
const getControllerPressedInputs = createSelector(
  (state, props) => state[NAME][props.controllerId].pressedInputs,
  (pressedInputs) => pressedInputs 
)

const getControllerData = createSelector(
  (state, props) => state[NAME][props.controllerId].data,
  (data) => data
)

export const selectors = { getControllerPressedInputs, getControllerData }

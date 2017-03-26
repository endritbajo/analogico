// Action types
const PLAY = 'sequencer/PLAY'
const PAUSE = 'sequencer/PAUSE'
const STOP = 'sequencer/STOP'
const REGISTER = 'sequencer/REGISTER'


// Actions
export const play = () => ({
  type: PLAY,
  payload: {}
});

export const pause = () => ({
  type: PAUSE,
  payload: {}
});

export const stop = () => ({
  type: STOP,
  payload: {}
});

export const register = (instrument, time) => ({
  type: REGISTER,
  payload: {}
});

// Reducer
const initialState = {
  state: 'stopped'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAY:
      return 'playing'
    case PAUSE:
      return 'paused'
    case STOP:
      return 'stopped'
    default:
      return state
  }
}

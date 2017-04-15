// Action types
const PLAY = 'sequencer/PLAY'
const PAUSE = 'sequencer/PAUSE'
const STOP = 'sequencer/STOP'

const START_RECORDING = 'sequencer/START_RECORDING'
const STOP_RECORDING = 'sequencer/STOP_RECORDING'


// Actions
const play = () => ({
  type: PLAY,
  payload: {}
});

const pause = () => ({
  type: PAUSE,
  payload: {}
});

const stop = () => ({
  type: STOP,
  payload: {}
});

const startRecording = (instrument, time) => ({
  type: START_RECORDING,
  payload: { instrument, time }
});

const stopRecording = () => ({
  type: STOP_RECORDING
});


export const actions = { play, pause, stop, startRecording, stopRecording }

// Reducer
const States = {
  PLAYING: 'playing',
  PAUSED: 'paused',
  STOPPED: 'stopped',
  RECORDING: 'recording',
}

const initialState = {
  state: States.STOPPED,
  song: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_RECORDING:
      const { instrument, time } = action.payload
      return {
        state: state.state,
        song: [...state.song, { instrument, time }]
      }
    default:
      return state
  }
}

// Selectors
export const selectors = {}

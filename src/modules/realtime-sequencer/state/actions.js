import types from './actionTypes'

const play = () => ({
  type: types.PLAY,
  payload: {}
})

const pause = () => ({
  type: types.PAUSE,
  payload: {}
})

const stop = () => ({
  type: types.STOP,
  payload: {}
})

const startRecording = () => ({
  type: types.START_RECORDING,
  payload: { time: new Date() }
})

const stopRecording = () => ({
  type: types.STOP_RECORDING,
  payload: null
})

const record = (controllerId, instrument) => ({
  type: types.RECORD,
  payload: { controllerId, hit: { instrument, time: new Date() } }
})

export default { play, pause, stop, startRecording, stopRecording, record }

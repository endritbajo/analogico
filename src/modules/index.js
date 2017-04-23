import rootReducer from './rootReducer'
// Modules
import app from './app'
import realtimeSequencer from './realtime-sequencer'
import padControllers from './pad-controllers'

export const reducer = rootReducer
export default { app, realtimeSequencer, padControllers }

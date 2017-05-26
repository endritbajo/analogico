import rootReducer from './rootReducer'
// Modules
import app from './app'
import realtimeSequencer from './realtime-sequencer'
import padControllers from './pad-controllers'
import shared from './shared'

export const reducer = rootReducer
export default { app, realtimeSequencer, padControllers, shared }

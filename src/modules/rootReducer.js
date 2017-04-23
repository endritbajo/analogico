import { combineReducers } from 'redux';
import app from './app';
import padControllers from './pad-controllers';
import realtimeSequencer from './realtime-sequencer';

export default combineReducers({
  [app.constants.NAME]: app.reducer,
  [padControllers.constants.NAME]: padControllers.reducer,
  [realtimeSequencer.constants.NAME]: realtimeSequencer.reducer
});

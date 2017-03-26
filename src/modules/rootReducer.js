import { combineReducers } from 'redux';
import app from './app';
import sequencer from './sequencer';
import controllers from './controllers';

export default combineReducers({
  [app.constants.NAME]: app.reducer,
  [sequencer.constants.NAME]: sequencer.reducer,
  [controllers.constants.NAME]: controllers.reducer
});

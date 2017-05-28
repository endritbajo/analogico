import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './style.css'
import app from 'modules/app'
import shared from 'modules/shared'
import padControllers from 'modules/pad-controllers'
import realtimeSequencer from 'modules/realtime-sequencer'
import Modal from '../Modal'
import RecordButton from '../RecordButton'
import PlayButton from '../PlayButton'
import { samples } from 'common/audio'

const State = realtimeSequencer.constants.State;
const PadController = padControllers.components.PadController;
const RealtimeSequencer = realtimeSequencer.components.RealtimeSequencer;
const Window = shared.components.Window;

const toggleRecording = (sequencerState, startRecording, stopRecording) => () => {
    if (sequencerState !== State.RECORDING) {
      startRecording()
    } else {
      stopRecording()
    }
}

const togglePlay = (sequencerState, play, stop) => () => {
  if (sequencerState !== State.PLAYING) {
    play()
  } else {
    stop()
  }
}

export const App = ({play, stop, sequencerState, startRecording, stopRecording, record, controllers}) => (
  <div className={style.board}>
    <Modal show={false} />
    <div className={style.actionsContainer}>
      <div className={style.actions}>
        <PlayButton
          className={style.action}
          isPlaying={sequencerState === State.PLAYING}
          onClick={togglePlay(sequencerState, play, stop)}/>
        <RecordButton
          className={style.action}
          isRecording={sequencerState === State.RECORDING}
          onClick={toggleRecording(sequencerState, startRecording, stopRecording)}/>
      </div>
    </div>

    <Window width={400} title='sequencer'>
      <RealtimeSequencer/>
    </Window>

    <div className={style.controllers}>
      { controllers.map(id =>
        <Window key={id} width={190} height={190} title='pad controller'>
          <PadController
            id={id}
            rows='1'
            columns='3'
            onPress={(instrument) => record(id, instrument)}
          />
        </Window>
      )}
    </div>
  </div>
)

const maps = [
  state => ({
    controllers: app.selectors.getPadControllers(state),
    sequencerState: realtimeSequencer.selectors.getState(state)
  }),
  dispatch => ({
    play: () => dispatch(realtimeSequencer.actions.play()),
    stop: () => dispatch(realtimeSequencer.actions.stop()),
    startRecording: () => dispatch(realtimeSequencer.actions.startRecording()),
    stopRecording: () => dispatch(realtimeSequencer.actions.stopRecording()),
    record: (controllerId, instrument) => dispatch(realtimeSequencer.actions.record(controllerId, instrument))
  }),
]

export default connect(...maps)(App)

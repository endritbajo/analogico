import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions, selectors } from '../../state'
import shared from 'modules/shared'
import style from './style.css'

const Button = shared.components.Button
const buttonColors = shared.constants.Color;

const togglePlay = (isPlaying, play, stop) => ()  => isPlaying ? stop() : play()
const toggleRecord = (isRecording, start, stop) => () => isRecording ? stop() : start()

const Toolbar = ({isPlaying, isRecording, play, stop, startRecording, stopRecording}) => (
  <div className={style.toolbar}>
    <div className={style.controls}>
      <Button pressed={isPlaying} onClick={togglePlay(isPlaying, play, stop)}>
        play
      </Button>
      <Button pressed={isRecording}
              onClick={togglePlay(isRecording, startRecording, stopRecording)}
              color={buttonColors.RED}>
        record
      </Button>
    </div>
  </div>
)

const maps = [
  state => {
    const sequencerState = selectors.getState(state);
    return {
      isPlaying: sequencerState === 'playing',
      isRecording: sequencerState === 'recording'
    }
  },
  dispatch => ({
    play: () => dispatch(actions.play()),
    stop: () => dispatch(actions.stop()),
    startRecording: () => dispatch(actions.startRecording()),
    stopRecording: () => dispatch(actions.stopRecording())
  })
]

export default connect(...maps)(Toolbar)


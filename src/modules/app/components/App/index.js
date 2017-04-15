import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './style.css'
import controllers from 'modules/controllers'
import sequencer from 'modules/sequencer'

const Controller = controllers.components.Controller;
const Sequencer = sequencer.components.Sequencer;

export const App = ({record}) => (
  <div className={style.board}>
    <Controller id='1' onPress={record.bind(this)}/>
    <Sequencer />
  </div>
)

const maps = [
  null,
  dispatch => ({
    record: (instrument, time) => dispatch(sequencer.actions.startRecording(instrument, time))
  }),
]

export default connect(...maps)(App)

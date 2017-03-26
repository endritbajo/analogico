import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './style.css'
import controllers from 'modules/controllers'
import sequencer from 'modules/sequencer'

const Controller = controllers.components.Controller;
const Sequencer = sequencer.components.Sequencer;

export const App = () => (
  <div className={style.board}>
    <Controller />
    <Sequencer />
  </div>
)

const maps = [
  null,
  null
]

export default connect(...maps)(App)

import React from 'react'
import { connect } from 'react-redux'
import style from './style.css'
import controllers from 'modules/controllers'

const Sequencer = ({ pressedInputs }) => (
  <div>
    Sequencer: { pressedInputs }
  </div>
)

const maps = [
  state => ({
    pressedInputs: controllers.selectors.getControllerPressedInputs(state, {
      controllerId: '1'
    })
  }),
  null
]

export default connect(...maps)(Sequencer)

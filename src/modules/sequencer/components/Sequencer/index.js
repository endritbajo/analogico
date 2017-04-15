import React from 'react'
import { connect } from 'react-redux'
import style from './style.css'
import controllers from 'modules/controllers'
import sequencer from 'modules/sequencer'

const Sequencer = ({ pressedInputs }) => {
  return (
    <div>
      Sequencer: { pressedInputs }
    </div>
  )
}

const maps = [
  state => ({
    pressedInputs: controllers.selectors.getControllerPressedInputs(state, {
      controllerId: '1'
    })
  }),
  null,
]

export default connect(...maps)(Sequencer)

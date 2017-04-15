import React from 'react'
import { connect } from 'react-redux'
import style from './style.css'
import Pad from '../Pad'
import { actions, selectors } from '../../state'

const start = {
  x: 100,
  y: 100
}

const padDistance = 60

const Controller = ({ id, pads, onPress, setPadPressed }) => (
  <div className={style.container}>
    { pads.map((pad, i) => <Pad key={pad.id} sound={pad.sound} onActiveChange={() => {
      setPadPressed(id, pad.id);
      if (onPress) {
        onPress(pad.id, new Date());
      }
    }} x={start.x + i * padDistance} y={start.y} />) }
  </div>
)

const maps = [
  (state, ownProps) => ({
    pads: selectors.getControllerData(state, { controllerId: ownProps.id })
  }),
  (dispatch) => ({
    setPadPressed: (controllerId, padId) => pressed => dispatch(actions.setPressedInput(controllerId, padId, pressed))
  })
]

export default connect(...maps)(Controller)

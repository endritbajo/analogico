import React from 'react'
import { connect } from 'react-redux'
import Draggable from 'react-draggable'
import style from './style.css'
import Pad from '../Pad'
import { actions, selectors } from '../../state'

const PadController = ({ id, pads, onPress }) => (
  <div className={style.padController}>
    { pads.map((pad, i) =>
        <Pad
          key={pad.id}
          {...pad}
          onPress={onPress}
          color='#42B28D'
          size={50}
        />
    )}
    <Pad size={50} />
    <Pad size={50} />
    <Pad size={50} />
    <Pad size={50} />
    <Pad size={50} />
    <Pad size={50} />
  </div>
)

const maps = [
  (state, props) => ({
    pads: selectors.getPads(state, { controllerId: props.id })
  }),
  null
]

export default connect(...maps)(PadController)

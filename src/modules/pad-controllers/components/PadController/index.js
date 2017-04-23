import React from 'react'
import { connect } from 'react-redux'
import Draggable from 'react-draggable'
import style from './style.css'
import Pad from '../Pad'
import { actions, selectors } from '../../state'

const start = {
  x: 10,
  y: 10
}

const pos = (start, i, padDistance = 60) => ({ x: start.x + i * padDistance, y: start.y })

const handle = `.${style.header}`

const PadController = ({ id, pads, onPress }) => (
  <Draggable handle={handle}>
    <div className={style.container}>
      <div className={style.header}>PAD CONTROLLER</div>
      <div className={style.content}>
        { pads.map((pad, i) =>
            <Pad
              key={pad.id}
              {...pad}
              onPress={onPress}
              color='#42B28D'
            />
        )}
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
      </div>
    </div>
  </Draggable>
)

const maps = [
  (state, props) => ({
    pads: selectors.getPads(state, { controllerId: props.id })
  }),
  null
]

export default connect(...maps)(PadController)

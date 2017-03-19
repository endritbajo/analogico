import React, { Component } from 'react'
import style from './style.css'
import { AudioPlayer, context } from '../../../shared/audio-utils'

class Pad extends Component {
  constructor() {
    super()
    this.handleMouseEvent = this.handleMouseEvent.bind(this)
    this.state = { padActive: false }
  }

  componentWillMount() {
    this.player = new AudioPlayer(context, [this.props.sound])
  }

  handleMouseEvent(event) {
    this.setState({ padActive: event.type === 'mousedown' })
    if (this.state.padActive) {
      this.player.play(this.props.sound.label)
    }
  }

  render() {
    const { sound, x, y } = this.props
    const labelClass = this.state.padActive ? style.label__active : style.label
    const lineClass = this.state.padActive ? style.line__active : style.line
    return (
      <div className={style.pad}
          onMouseDown={this.handleMouseEvent}
          onMouseUp={this.handleMouseEvent}
          onMouseLeave={this.handleMouseEvent}
          style={{top: y, left: x}}>
        <div className={style.content}>
          <div className={labelClass}>{sound.label}</div>
          <div className={lineClass}></div>
        </div>
      </div>
    )
  }
}

export default Pad

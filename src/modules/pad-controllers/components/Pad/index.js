import React, { Component } from 'react'
import Tone from 'tone'
import style from './style.css'
import { AudioPlayer, context } from 'common/audio'

class Pad extends Component {
  constructor() {
    super()
    this.handleMouseEvent = this.handleMouseEvent.bind(this)
    this.state = { padActive: false }
  }

  componentWillMount() {
    this.sampler = new Tone.Sampler(this.props.sound).toMaster()
  }

  handleMouseEvent(event) {
    const active = event.type === 'mousedown'
    if (active !== this.state.padActive) {
      if (active) {
        if (this.props.onPress) {
          this.props.onPress(this.props.label, active)
        }
        this.sampler.triggerAttack();
      }
      this.setState({ padActive: active })
    }
  }

  render() {
    const { label, sound } = this.props
    const labelClass = this.state.padActive ? style.label__active : style.label
    const lineClass = this.state.padActive ? style.line__active : style.line
    let color = {}
    if (this.props.color) {
      color =  {
        backgroundColor: this.props.color
      }
    }
    // get the mouse events from the document not from the element
    // if you get from the document you know when the mouse is up
    return (
      <div style={color} className={style.pad}
          onMouseDown={this.handleMouseEvent}
          onMouseUp={this.handleMouseEvent}
          onMouseLeave={this.handleMouseEvent}>
        <div className={style.content}>
          <div className={style.label}>
          </div>
        </div>
      </div>
    )
  }
}

export default Pad

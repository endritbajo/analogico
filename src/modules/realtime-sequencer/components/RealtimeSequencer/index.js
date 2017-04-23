import React, { Component } from 'react'
import Tone from 'tone'
import { connect } from 'react-redux'
import { samples } from 'common/audio'
import Loop from '../Loop'
import Hit from '../Hit'
import { selectors } from '../../state'
import style from './style.css'

class RealtimeSequencer extends Component {
  constructor(props) {
    super(props)
    Tone.Transport.start()
    const time = Tone.Time('8:4:0')
    this.state = {
      length: time.toSeconds(),
    }
  }

  componentWillMount() {
    const urls = this.props.samples.reduce((acc, curr) => {
      acc[curr.label] = curr.src
      return acc
    }, {})

    this.player = new Tone.MultiPlayer({
      urls,
      volume: -10,
      fadeOut: 0.1,
    }).toMaster()

    this.updateState(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.state !== nextProps.state) {
      this.updateState(nextProps)
    }
  }

  createLoop(player, track) {
    const part = track.reduce((acc, curr) => [...acc, [curr.time, curr.instrument]], [])
    const tone = new Tone.Part((time, instrument) => {
      player.start(instrument, time);
    }, part)
    tone.loop = true
    tone.loopEnd = '8:4:0'
    return tone
  }

  play(loop) {
    loop.start()
  }

  stop(loop) {
    loop.stop()
  }

  updateState (props) {
    this.loop = this.createLoop(this.player, props.track)

    if (props.state === 'playing') {
      this.play(this.loop)
    } else {
      this.stop(this.loop)
    }
  }

  isPlaying() {
    return this.props.state === 'playing' || this.props.state === 'recording'
  }

  render() {
    const times = this.props.track.map(hit => hit.time)
    const positions = times.map(time => time / this.state.length)
    const progressBg = `${style.progressBg} ${this.isPlaying() ? style.transitionBg : ''}`
    const progressLine = `${style.progressLine} ${this.isPlaying() ? style.transition : ''}`
    const duration = {
      animationDuration: '18s'
    }
    const paddingTop = {
      paddingTop: '7px'
    }
    const greenHit = `${style.hit} ${style.green}`
    return (
      <div className={style.loops}>
        <div style={duration} className={progressBg}></div>
        <div style={duration} className={progressLine}></div>
        <div style={paddingTop}></div>
        <Loop>
          
          { this.props.track.map((hit, i) => {
              const pos = hit.time / this.state.length
              return <Hit key={i} position={pos} color='#42B28D'/>
            })
          }
        </Loop>
        <Loop />
        <Loop />
        <Loop />
      </div>
    )
  }
}

const maps = [
  state => ({
    samples,
    track: selectors.getTrack(state),
    state: selectors.getState(state),
  }),
  null
]

export default connect(...maps)(RealtimeSequencer)

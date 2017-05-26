import React, { Component } from 'react'
import Tone from 'tone'
import { connect } from 'react-redux'
import { samples } from 'common/audio'
import { branch, renderNothing } from 'recompose'
import Toolbar from '../Toolbar'
import Loop from '../Loop'
import { selectors } from '../../state'
import style from './style.css'

const hideIfNoData = hasNoData =>
  branch(
    hasNoData,
    renderNothing
  )

const enhance = hideIfNoData(
  props => !props.show
)

const ProgressBar = ({duration, play, stop}) => {
  //const progressBg = `${style.progressBg} ${play ? style.transitionBg : ''}`
  const progressLine = `${style.progressLine} ${play ? style.transition : ''}`
  const animationDuration = {
    animationDuration: `${duration}s`
  }
  return (
    <div style={animationDuration} className={progressLine}></div>
  )
}

const Loops = ({children}) => {
  return <div className={style.loops}>{children}</div>
}

const getPlayer = (urls) => new Tone.MultiPlayer({
  urls,
  volume: -10,
  fadeOut: 0.1,
}).toMaster()


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

    this.player = getPlayer(urls)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loops != nextProps.loops) {
      this.loop = this.createLoop(this.player, nextProps.loops)
    }
    if (this.props.state !== nextProps.state) {
      this.updateState(nextProps)
    }
  }

  createLoop(player, loops) {
    const track = Object.values(loops).reduce((a, c) => [...a, ...c], [])
    const part = track.reduce((acc, curr) => [...acc, [curr.time, curr.instrument]], [])
    const tone = new Tone.Part((time, instrument) => {
      player.start(instrument, time);
    }, part)
    tone.loop = true
    tone.loopEnd = '8:4:0'
    return tone
  }

  updateState (props) {
    if (!this.loop) {
      return;
    }
    if (props.state === 'playing') {
      this.loop.start();
    } else {
      this.loop.stop();
    }
  }

  shouldShowProgress(props) {
    return props.state === 'playing' || props.state === 'recording'
  }

  render() {
    const loops = Object.keys(this.props.loops);
    const getControllerName = (controllers, controllerId) => {
      const controller = controllers
        .find(controller => controller.id === controllerId)
      return controller ? controller.name : ''
    }
    const renderProgressBar = (show) => show
      ? <ProgressBar duration={this.state.length} play={this.shouldShowProgress(this.props)}/>
      : null;

    return (
      <div className={style.realtimeSequencer}>
        <Toolbar />
        <div className={style.content}>
          { renderProgressBar(this.shouldShowProgress(this.props)) }
          <Loops>
            {
              loops.map(key =>
                <Loop key={key}
                  name={getControllerName(this.props.controllers, key)}
                  hits={this.props.loops[key]}
                  duration={this.state.length}
                  color='#42B28D'
                />
              )
            }
          </Loops>
        </div>
      </div>
    )
  }
}

const maps = [
  state => ({
    samples,
    controllers: selectors.getControllers(state),
    loops: selectors.getLoops(state),
    state: selectors.getState(state),
  }),
  null
]

export default connect(...maps)(RealtimeSequencer)

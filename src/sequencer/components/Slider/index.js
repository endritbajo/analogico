import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './style.css'

export class Slider extends Component {
  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
  }

  componentWillMount() {
    this.setState({
      value: this.props.defaultValue || 0
    })
  }

  onChange(evt) {
    if (evt.target) {
      this.setState({ value: evt.target.value })
      if (this.props.onChange) {
        this.props.onChange(parseInt(evt.target.value))
      }
    }
  }

  render() {
    // (max - min) / 2
    const { min = 0, max = 100 } = this.props
    return (
      <div className={styles.container}>
        <input className={styles.slider} type='range' onChange={this.onChange} defaultValue={this.state.value} min={min} max={max} />
        <span className={styles.value}>{this.state.value}</span>
      </div>
    )
  }
}

// <g id="slider-group" >
//   <strong>ciao</strong>
// </g>

const maps = [
  null,
  null
]

export default connect(...maps)(Slider)

import React, { Component } from 'react'
import styles from './style.css'

class Pad extends Component {
  constructor(){
    super()
    this.handleMouseEvent = this.handleMouseEvent.bind(this)
    this.state = {
      padActive: false
    }
  }

  handleMouseEvent(event) {
    this.setState({
      padActive: event.type === 'mousedown' 
    })
  }

  calcLinePos(width, height, x, y) {
    return {
      x1: x + 0.33 * width,
      x2: x + 0.66 * width,
      y1: y + 0.75 * height,
      y2: y + 0.75 * height
    };
  }

  calcLabelPos(width, height, x, y) {
    return {
      labelX: x + 0.21 * width,
      labelY: y + 0.5 * height
    }
  }

  render() {
    const { width, height, sound, x, y } = this.props
    const { x1, x2, y1, y2 } = this.calcLinePos(width, height, x, y);
    const { labelX, labelY } = this.calcLabelPos(width, height, x, y);
    return (
      <g>
        <rect
          className={styles.pad}
          onMouseDown={this.handleMouseEvent}
          onMouseUp={this.handleMouseEvent}
          onMouseLeave={this.handleMouseEvent}
          width={width}
          height={height}
          x={x}
          y={y}
          rx='5'
          ry='5'>
        </rect>
        <text
          className={
            this.state.padActive ? 
            [ styles.label, styles.active ].join(' ') 
            : styles.label}
          x={labelX} 
          y={labelY}>
          {sound.label}
        </text>
        <line
          className={
            this.state.padActive ? 
            [ styles.line, styles.active ].join(' ') 
            : styles.line}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          fill='#FFFFFF'>
        </line>
      </g>
    )
  }
}

export default Pad

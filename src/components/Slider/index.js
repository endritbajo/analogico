import React from 'react'
import { connect } from 'react-redux'
import styles from './style.css'

const posToTransform = ({x, y}) => "matrix(1 0 0 1 " + x +  " " + y + ")"

export const Slider = ({ id, height, width, x, y, min = 0, max = 100 }) => (
  <foreignObject width={width} height={height} x={x} y={y}>
    <div className={styles.container}>
      <input className={styles.slider} type='range' defaultValue={(max - min) / 2} min={min} max={max} />
      <span className={styles.value}>{(max - min) / 2}</span>
    </div>
  </foreignObject>
)

// <g id="slider-group" >
//   <strong>ciao</strong>
// </g>

const maps = [
  null,
  null
]

export default connect(...maps)(Slider)

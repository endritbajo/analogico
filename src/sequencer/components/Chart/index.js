import React from 'react'
import { connect } from 'react-redux'
import styles from './style.css'
import { toPoints, toPath } from './spline'

const posToTransform = ({x, y}) => "matrix(1 0 0 1 " + x +  " " + y + ")"

export const Chart = ({ id, height, width, x, y, points = [], tolerance = 0, highestQuality = true }) => (
  <g transform={posToTransform({x, y})} clipPath='url(#clip1)'>
    <clipPath id="clip1">
      <rect
        width={width}
        height={height}
        x='0'
        y='0'
        rx='5'
        ry='5'
      />
    </clipPath>

    <rect
      width={width}
      height={height}
      x='0'
      y='0'
      rx='5'
      ry='5'
      className={styles.tile}
    />

    <g transform={posToTransform({x:0, y:height / 2})}>
      <path
        d={points.length > 0 ? toPath(points, tolerance, highestQuality) : ''}
        className={styles.line}/>
    </g>
  </g>
)

const maps = [
  null,
  null
]

export default connect(...maps)(Chart)

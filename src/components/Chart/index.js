import React from 'react'
import { connect } from 'react-redux'
// import { moveNode, setToHighestRenderQueue } from '../../actions'
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

// const amplitude = 1; // wave amplitude
// const rarity = 0.5; // point spacing
// const freq = 0.5; // angular frequency
// const phase = Math.PI*2; // phase angle

// <g id="axes" stroke="black">
//   <line x1={-halfWidth} y1='0' x2={halfWidth} y2='0' />
//   <line x1='0' y1={-halfHeight} x2='0' y2={halfHeight} />
// </g>
// const getPolylineString = (from, to) => {
//   return getPoints(from, to).reduce((acc, curr) => acc + (curr[0] + ',' + (curr[1]+10)) + ' ', '')
// }
// const polylineAttr = getPolylineString(-width, width)
// <polyline points={polylineAttr} className={styles.polyline}/>

const maps = [
  null,
  null
]

export default connect(...maps)(Chart)

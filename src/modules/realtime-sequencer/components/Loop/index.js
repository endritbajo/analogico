import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Hit from '../Hit'
import style from './style.css'

const Loop = ({ name, color, duration, hits }) => (
  <div className={style.loop}>
    <div className={style.loop__name}>
      <div className={style.loop__name__text}>{name}</div>
    </div>
    {
      hits
        .map(hit => hit.time / duration)
        .map((pos, i) => <Hit key={i} position={pos} color={color}/>)
    }
  </div>
)

Loop.propTypes = {
  duration: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
  hits: PropTypes.array,
}

export default Loop


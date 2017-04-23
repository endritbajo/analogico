import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './style.css'

const toStyle = (color, position) => ({
  backgroundColor: color,
  left: `${position * 100}%`
})

const Hit = ({ color, position }) => (
  <div style={toStyle(color, position)} className={style.hit}></div>
)

Hit.propTypes = {
  color: PropTypes.string,
  position: PropTypes.number
}

export default Hit


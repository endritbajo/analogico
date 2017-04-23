import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './style.css'

const toStyle = (color, position) => ({
  backgroundColor: color,
  left: `${position * 100}%`
})

const Loop = ({ name, color, children }) => (
  <div className={style.loop}>
    { children }
  </div>
)

Loop.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string
}

export default Loop


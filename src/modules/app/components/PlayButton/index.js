import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './style.css'
import * as _ from 'lodash'

const getIconClass = (isPlaying) =>
  `${isPlaying ? style.stop : style.play}`

const PlayButton = ({ isPlaying, onClick }) => (
  <div className={style.container} onClick={onClick}>
    <div className={getIconClass(isPlaying)}></div>
  </div>
)

PlayButton.propTypes = {
  isPlaying: PropTypes.bool,
  onClick: PropTypes.func
}

export default PlayButton


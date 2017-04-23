import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './style.css'
import * as _ from 'lodash'

const getIconClass = (isRecording) =>
  `${style.icon} ${isRecording ? '' : style.circle}`

const containerClass = `${style.container} ${style.circle}`

const RecordButton = ({ isRecording, onClick }) => (
  <div className={containerClass} onClick={onClick}>
    <div className={getIconClass(isRecording)}></div>
  </div>
)

RecordButton.propTypes = {
  isRecording: PropTypes.bool,
  onClick: PropTypes.func
}

export default RecordButton


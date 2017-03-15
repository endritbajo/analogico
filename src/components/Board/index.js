import React, { Component } from 'react'
import { connect } from 'react-redux'
import Synthesizer from '../Synthesizer'
import styles from './style.css'

export const Board = ({ synthesizers, height, width }) => (
  <svg height={height} width={width} className={styles.board}>
    { synthesizers.map(synth => <Synthesizer key={synth.id} id={synth.id} {...synth.values}></Synthesizer>) }
  </svg>
)

const maps = [
  ({ synthesizers }) => ({ synthesizers }),
  null
]

export default connect(...maps)(Board)

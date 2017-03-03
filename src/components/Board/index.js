import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from '../Slider'
import Chart from '../Chart'
import styles from './style.css'
// import { } from '../../actions'

const radians = (degrees) => degrees * Math.PI / 180
const amp = 30
const freq = 10

const sin = (amp, freq) => (x) => Math.sin(radians((x * freq) % 360)) * amp

const calcPoints = (from, to, func) =>
  Array.from(new Array(to - from), (x, i) => [i + from, func(i + from)])

export const Board = ({ height, width }) => (
  <svg height={height} width={width} className={styles.board}>
    <Slider id='1' width='300' height='100' x='100' y='200' min='0' max='100' />
    <Slider id='2' width='300' height='100' x='100' y='250' min='0' max='100' />
    <Chart id='chart' width='300' height='200' x='100' y='300' points={calcPoints(0, 300, sin(amp, freq))}/>
  </svg>
)

const maps = [
  null,
  null
]

export default connect(...maps)(Board)

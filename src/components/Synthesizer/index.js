import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from '../Slider'
import Chart from '../Chart'
import { setSynthValues } from '../../actions'

const radians = (degrees) => degrees * Math.PI / 180
const amp = 30
const freq = 10

const sin = (amp, freq) => (x) => Math.sin(radians((x * freq) % 360)) * amp

const calcPoints = (from, to, func) =>
  Array.from(new Array(to - from), (x, i) => [i + from, func(i + from)])

export const Synthesizer = ({ id, frequency, amplitude, changeAmplitude, changeFrequency }) => (
  <g>
    <Slider width='300' height='100' x='100' y='200' min='0' max='100' defaultValue={amplitude} onChange={changeAmplitude(id)}/>
    <Slider width='300' height='100' x='100' y='250' min='0' max='100' defaultValue={frequency} onChange={changeFrequency(id)}/>
    <Chart id='chart' width='300' height='200' x='100' y='300' points={calcPoints(0, 300, sin(amplitude, frequency))}/>
  </g>
)

// (dispatch) => ({
//   onDragSlider: (synthId, controlId, value) => dispatch(setSynthControlValue(synthId, controlId, value))
// })

const maps = [
  null,
  (dispatch) => ({
    changeAmplitude: (id) => (amplitude) => dispatch(setSynthValues(id, { amplitude })),
    changeFrequency: (id) => (frequency) => dispatch(setSynthValues(id, { frequency }))
  }),
]

export default connect(...maps)(Synthesizer)

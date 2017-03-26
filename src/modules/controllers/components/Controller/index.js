import React from 'react'
import style from './style.css'
import Pad from '../Pad'

const sounds = [
  {
    label: 'kick',
    src: require('assets/audio/kicks/kick.wav'),
  },
  {
    label: 'snare',
    src: require('assets/audio/snares/snare.wav'),
  },
  {
    label: 'hat',
    src: require('assets/audio/hats/hat.wav'),
  },
]

const start = {
  x: 100,
  y: 100
}

const padDistance = 60

const Controller = () => (
  <div className={style.container}>
    { sounds.map((sound, i) => <Pad key={i} sound={sound} x={start.x + i * padDistance} y={start.y} />) }
  </div>
)

export default Controller

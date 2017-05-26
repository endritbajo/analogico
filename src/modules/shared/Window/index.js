import React from 'react'
import Draggable from 'react-draggable'
import style from './style.css'

const handle = `.${style.header}`

const heightStyle = (height) => ({
  height: height ? `${height}px` : 'auto'
})

const widthStyle = (width) => ({
  width: width ? `${width}px` : 'auto'
})

export default ({title, width, height, children}) => (
  <Draggable handle={handle}>
    <div style={widthStyle(width)} className={style.container}>
      <div className={style.header}>{title.toUpperCase()}</div>
      <div style={heightStyle(height)} className={style.content}>
        {children}
      </div>
    </div>
  </Draggable>
)

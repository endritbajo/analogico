import React, { PropTypes } from 'react'
import shared from 'modules/shared'
import style from './style.css'

const active = (active, currentClasses) => active ? `${currentClasses} ${style.active}` : `${currentClasses}`

const colorToStyle = color => ({
  color: `${color}`,
  borderColor: `${color}`
})

const combine = (...classes) => classes.reduce((acc, curr) => `${acc} ${curr}`, '')

const colorToClass = color => {
  switch (color) {
    case shared.constants.Color.RED:
      return style.red
    default:
      return ''
  }
}

export const Button = ({pressed, onClick, color, children}) => (
  <div className={combine(active(pressed, style.button), colorToClass(color))}
       onClick={onClick}>
    {children}
  </div>
)

Button.propTypes = {
  pressed: PropTypes.bool,
  color: PropTypes.number,
  onClick: PropTypes.func,
}

export default Button

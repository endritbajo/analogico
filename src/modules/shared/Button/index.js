import React, { PropTypes } from 'react'
import style from './style.css'

const active = (active, currentClasses) => active ? `${currentClasses} ${style.active}` : `${currentClasses}`

const combine = (...classes) => classes.reduce((acc, curr) => `${acc} ${curr}`, '')


export const Button = ({pressed, onClick, children}) => (
  <div className={combine(active(pressed, style.button))}
       onClick={onClick}>
    <div className={style.button__inner}>
      {children}
    </div>
  </div>
)

Button.propTypes = {
  pressed: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button

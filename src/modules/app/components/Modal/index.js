import React from 'react'
import { branch, renderNothing } from 'recompose'
import style from './style.css'

const hideIfNoData = hasNoData =>
  branch(
    hasNoData,
    renderNothing
  )

const enhance = hideIfNoData(
  props => !props.show
)

export default enhance(({show}) =>
  <div className={style.modal}>
    <div className={style.modalContent}>
      pad controller
    </div>
  </div>
)

import { createSelector } from 'reselect'
import { NAME } from './constants'
import padControllers from 'modules/pad-controllers'

const INIT = 'app/INIT'

// Actions

export const actions = {}

// Reducer
const initialState = {
  controllers: ['1'],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const getPadControllers = createSelector(
  (state) => padControllers.selectors.getAllPadControllers(state),
  (ids) => ids
)

export const selectors = { getPadControllers }

import * as types from '../constants/ActionTypes'
import { newGUID } from '../utils/guid'

export const setSynthValues = (synthId, values) => ({ type: types.SET_SYNTH_VALUES, synthId, values })

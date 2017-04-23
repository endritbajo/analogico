import types from './actionTypes'
import { newGUID } from 'common/utils/guid'

const addPad = (controllerId, label, sound) => ({
  type: types.ADD_PAD,
  payload: {
    controllerId,
    pad: {
      id: newGUID('pad'),
      label,
      sound
    }
  }
})

export default { addPad }

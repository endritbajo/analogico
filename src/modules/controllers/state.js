const LOAD = 'controller/LOAD'

// Actions
export const load = (padId, sound) => ({
  type: LOAD,
  payload: { padId, sound }
});

// Reducer
const initialState = [{
  id: '1',
  sound: {
    label: 'kick',
    src: '../path/somewhere'
  }
}]

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const { padId, sound } = action.payload
      const index = state.findIndex(b => b.id == padId)
      const copiedSound = Object.assign({}, sound)
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], { sound: copiedSound }),
        ...state.slice(index + 1)
      ]
    default:
      return state
  }
}
import { EDGE_ADD, EDGE_REMOVE } from '../constants/ActionTypes'

const initialState = []

export default function nodes(state = initialState, action) {
  switch (action.type) {
    case EDGE_ADD:
      return [
        {
          id: action.id,
          from: action.from,
          to: action.to,
          fromConnector: action.fromConnector,
          toConnector: action.toConnector,
        },
        ...state
      ]
    // case EDGES_SET_RENDER_QUEUE:
    //   return state
    //     .map(connection => actions.ids.includes(connection.id) ? Object.assign({}, connection, { renderQueue: action.queueNumber }) : connection)
    //     .sort((a, b) => a.renderQueue > b.renderQueue)
    default:
      return state
  }
}

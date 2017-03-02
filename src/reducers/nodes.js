import { NODE_ADD, NODE_SET_DRAGGING, NODE_MOVE, NODE_MOVE_DELTA, CONNECTOR_ADD } from '../constants/ActionTypes'

const initialState = []

const addConnector = (node, { id, dx, dy }) => {
  const connectors = node.connectors
  return Object.assign({}, node, {
    connectors: [
      ...connectors,
      { id, dx, dy }
    ]
  })
}

const translate = (position, { dx, dy }) => ({
  x: position.x + dx,
  y: position.y + dy
})

export default function nodes(state = initialState, action) {
  switch (action.type) {
    case NODE_ADD:
      return [
        {
          id: action.id,
          position: action.position,
          dragging: false,
          connectors: []
        },
        ...state
      ]
    case NODE_MOVE:
      const index = state.findIndex(b => b.id == action.id)
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], { position: action.position }),
        ...state.slice(index + 1)
      ]
    case NODE_MOVE_DELTA:
      const indexDelta = state.findIndex(b => b.id == action.id)
      const posCopy = Object.assign({}, state[indexDelta].position)
      return [
        ...state.slice(0, indexDelta),
        Object.assign({}, state[indexDelta], { position: translate(posCopy, action.delta) }),
        ...state.slice(indexDelta + 1)
      ]
    case NODE_SET_DRAGGING:
      const draggingIndex = state.findIndex(b => b.id == action.id)
      return [
        ...state.slice(0, draggingIndex),
        Object.assign({}, state[draggingIndex], { dragging: action.dragging }),
        ...state.slice(draggingIndex + 1)
      ]
    case CONNECTOR_ADD:
      return state
        .map(node => node.id == action.nodeId ? Object.assign({}, node, addConnector(node, action)) : node)
    // case NODE_SET_RENDER_QUEUE:
    //   return state
    //     .map(node => node.id == action.id ? Object.assign({}, node, { renderQueue: action.queueNumber }) : node)
    //     .sort((a, b) => a.renderQueue > b.renderQueue)
    // case NODE_RENDER_ON_TOP:
    //   const max = state
    //     .filter(node => node.id != action.id)
    //     .reduce((max, cur) => Math.max(max, cur.renderQueue), 0) + 2
    //   return state
    //     .map(node => node.id == action.id ? Object.assign({}, node, { renderQueue: max }) : node)
    //     .sort((a, b) => a.renderQueue > b.renderQueue)
    default:
      return state
  }
}

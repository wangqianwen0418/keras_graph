export const changeCode = (code) => {
  return {
    type: 'CHANGE_CODE',
    content: code
  }
}

export const changeGraph = (graph) => {
  return {
    type: 'CHANGE_GRAPH',
    content: graph
  }
}

export const moveLayers = (from, to) => {
  return {
    type: 'MOVE_LAYERS',
    from,
    to,
  }
}


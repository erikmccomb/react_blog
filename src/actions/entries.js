export const addEntry = (entry) => {
  return {type: 'ADD_ENTRY', entry}
}

export const toggleEntry = (id) => {
  return {type: 'TOGGLE_ENTRY', id}
}
export const addEntry = (entry) => {
  return {type: 'ADD_TODO', entry}
}

export const toggleEntry = (id) => {
  return {type: 'TOGGLE_TODO', id}
}
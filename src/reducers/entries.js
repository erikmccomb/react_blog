// Making entries, which will be an array [], and passing in an action as action.
const entries = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // when user adds a new entry, app will pass: {Type: 'ADD_TODO', entry: 'Buy
      // Milk'} return the new item(, ...)in front of all previous items
      return [
        action.entry, ...state
      ]
    case 'TOGGLE_TODO':
      //{type: 'TOGGLE_TODO', id: 1}
      return state.map(entry => {
        if (entry.id === action.id) 
          return {
            ...entry,
            complete: !entry.complete
          }
        return entry
      })
      // otherwise simply return the current state
    default:
      return state;
  }
}

export default entries;
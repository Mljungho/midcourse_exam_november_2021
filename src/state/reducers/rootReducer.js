const rootReducer = (state, action) => {
  
  switch (action.type) {
    case "SET_USER_FEED":
      return {
        ...state,
        userFeed: action.payload
      }

      default:
        return state
  }

}

export default rootReducer
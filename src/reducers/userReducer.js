const user = localStorage.getItem('user')

const userReducer = (state = {
  isActive: !!user
}, action) => {
  switch (action.type) {
    case 'USER_STATUS': {
      return {
        ...state,
        isActive: action.payload
      }
    }
    // case 'TASKER_DETAILS' : {
    //   return {
    //     ...state,
    //     bidTaskers: state.bidTaskers
    //       .concat(action.payload)
    //   }
    // }
  }
  return state
}

export default userReducer

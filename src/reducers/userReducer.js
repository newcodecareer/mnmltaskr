const user = localStorage.getItem('user')

const statusReducer = (state = {
  isActive: !!user
}, action) => {
  switch (action.type) {
    case 'USER_STATUS': {
      return {
        ...state,
        isActive: action.payload
      }
    }
  }
  return state
}

export default statusReducer

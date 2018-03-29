const user = localStorage.getItem('user')

export default function statusReducer (state = {
  isActive: !!user
}, action) {
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

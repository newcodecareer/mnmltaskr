const user = localStorage.getItem('user')

export default function statusReducer (state={
  isActive: user ? true : false
}, action) {

  switch (action.type) {
    case 'USER_STATUS': {
      return {
        ...state, 
        isActive: action.payload
      }
      break;
    }
  }
  return state
}
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import menuReducer from './menuReducer'
import tasksReducer from './tasksReducer'
import wizardReducer from './wizardReducer'
import userReducer from './userReducer'

const reducer = combineReducers({
  menu: menuReducer,
  tasks: tasksReducer,
  form: formReducer,
  wizard: wizardReducer,
  user: userReducer
})

export default reducer

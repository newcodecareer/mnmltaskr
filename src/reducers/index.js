import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import itemsReducer from './itemsReducer'
import tasksReducer from './tasksReducer'
import wizardReducer from './wizardReducer'
import statusReducer from './statusReducer'

const reducer = combineReducers({
  items: itemsReducer,
  tasks: tasksReducer,
  form: formReducer,
  wizard: wizardReducer,
  status: statusReducer
})

export default reducer

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import itemsReducer from './itemsReducer'
import tasksReducer from './tasksReducer'
import wizardReducer from './wizardReducer'

const reducer = combineReducers({
  items: itemsReducer,
  tasks: tasksReducer,
  form: formReducer, 
  wizard: wizardReducer
});

export default reducer

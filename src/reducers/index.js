import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import itemsReducer from './itemsReducer'
import tasksReducer from './tasksReducer'

const reducer = combineReducers({
  items: itemsReducer,
  tasks: tasksReducer,
  form: formReducer
});

export default reducer

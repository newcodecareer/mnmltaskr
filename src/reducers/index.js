import { combineReducers } from 'redux';

import itemsReducer from './itemsReducer'
import tasksReducer from './tasksReducer'

const reducer = combineReducers({
  items: itemsReducer,
  tasks: tasksReducer
});

export default reducer

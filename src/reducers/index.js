import { combineReducers } from 'redux';
import userListReducer from './reducer_users';
import activeNav from './reducer_active_nav';

const rootReducer = combineReducers({
  userList: userListReducer,
  activeNav
});

export default rootReducer;

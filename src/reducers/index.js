import { combineReducers } from 'redux';
import userListReducer from './reducer_users';
import activeNav from './reducer_active_nav';

const rootCompReducer = combineReducers({
  userList: userListReducer,
  activeNav
});

export default rootCompReducer;

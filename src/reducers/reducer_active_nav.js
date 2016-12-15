import { NAV_CLICK } from '../actions/index';

export default function userListReducer( state = 'Users', action) {

  switch (action.type) {
    case NAV_CLICK:
      return action.payload;

    default:
        return state;
  }
}

import { FETCH_USER_DATA } from '../actions/index';

export default function userListReducer( state = [], action) {

  switch (action.type) {
    case FETCH_USER_DATA:
      return action.payload.data;

    default:
        return state;
  }
}

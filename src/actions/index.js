import axios from 'axios';

export const FETCH_USER_DATA = 'FETCH_USER_DATA';

export const getUserData = function () {
  return {
    type: FETCH_USER_DATA,
    payload: axios.get('data/generated.json')
  }
}

export const NAV_CLICK = 'NAV_CLICK';

export const onNavClickHandler = function (params) {
  return {
    type: NAV_CLICK,
    payload: params
  }
}
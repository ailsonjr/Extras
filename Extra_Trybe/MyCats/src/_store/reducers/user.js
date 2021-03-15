import { LOGIN } from '../consts';

const INITIAL_STATE = {
  username: '',
  isLogged: false
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        usernaname: action.username,
        isLogged: true
      }
    default:
      return state;
  }
}

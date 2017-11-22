// @ constants
import {RESET} from '../constants/ActionTypes';

const setInitialState = () => [{
  error: '',
  id: 0,
  isFetching: false
}];

export default function base(state = setInitialState(), action) {
  switch (action.type) {
    case RESET:
      return setInitialState();
    default:
      return state;
  }
}

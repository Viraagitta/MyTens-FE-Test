import {
  DATA_FETCH_SUCCESS,
  PROFILE_FETCH_SUCCESS,
} from "../actions/actionType";
const initialState = { repos: [], profile: {} };
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_FETCH_SUCCESS:
      return { ...state, repos: action.payload };
    case PROFILE_FETCH_SUCCESS:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
}

export default rootReducer;

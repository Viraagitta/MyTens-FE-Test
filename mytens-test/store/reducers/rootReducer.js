// import { legacy_createStore as createStore } from "redux";
import { DATA_FETCH_SUCCESS } from "../actions/actionType";
const initialState = { repos: [] };
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_FETCH_SUCCESS:
      return { ...state, repos: action.payload };
    default:
      return state;
  }
}

export default rootReducer;

import {
  SEARCH_LOAD,
  SEARCH_LOAD_SUCCESS,
  SEARCH_LOAD_FAIL
} from '../actions/actionTypes';

const initialState = {
  loaded: false
};

export default function search(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH_LOAD:
      return {
        ...state,
        loading: true
      };
    case SEARCH_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case SEARCH_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.search && globalState.search.loaded;
}

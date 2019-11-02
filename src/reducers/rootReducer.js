import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/index';

const initialState = {
  joke: '',
  isFetching: false,
  error: '',
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        joke: action.payload
      }
    case FETCH_FAILURE: 
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default: 
      return state;
  };
};

export default rootReducer;
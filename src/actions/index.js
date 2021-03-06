import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchJoke = () => dispatch => {
  dispatch({ type: START_FETCHING });

  axios
    .get(`https://official-joke-api.appspot.com/random_joke`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE, payload: err.response });
    });
};

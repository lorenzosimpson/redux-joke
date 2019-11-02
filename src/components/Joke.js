import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { fetchJoke } from '../actions/index';

function Joke(props) {

  return (
    <div>
      <button onClick={props.fetchJoke}>Get Joke</button>
      <p>{props.joke.setup}</p>
      <p>{props.joke.punchline}</p>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    joke: state.joke,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchJoke} )(Joke)
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { fetchJoke } from '../actions/index';
import { Spinner } from 'reactstrap';

import { Button } from 'reactstrap';

function Joke(props) {

  return (
    <div className='joke-container'>
      <h5>{props.joke.setup}</h5>
      <p>{props.joke.punchline}</p>

      <Button color="success" onClick={props.fetchJoke}>Get Joke</Button>
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
import React from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import { fetchJoke } from '../actions/index';


import { Button } from 'reactstrap';

function Joke(props) {
  const dispatch = useDispatch()
  const joke = useSelector(state => state.joke)
  const isFetching = useSelector(state => state.isFetching)
  const error = useSelector(state => state.error)




  const handleSubmit = e => {
    e.preventDefault()
    dispatch(fetchJoke())
  }

  return (
    <div className='joke-container'>
      <h5>{joke.setup}</h5>
      <p>{joke.punchline}</p>

      <Button color="success" onClick={handleSubmit}>Get Joke</Button>
    </div>
  )
};

export default Joke;


// const mapStateToProps = state => {
//   return {
//     joke: state.joke,
//     isFetching: state.isFetching,
//     error: state.error
//   }
// }

// export default connect(mapStateToProps, { fetchJoke} )(Joke)


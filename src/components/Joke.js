import React from 'react';
import axios from 'axios';


import { Button } from 'reactstrap';

class Joke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: {}
    }
  }


  handleSubmit = e => {
    e.preventDefault()
    axios
    .get(`https://official-joke-api.appspot.com/random_joke`)
    .then(res => {
      this.setState({
        joke: res.data
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className='joke-container'>
        <h5>{this.state.joke.setup}</h5>
        <p>{this.state.joke.punchline}</p>
  
        <Button color="success" onClick={this.handleSubmit}>Get Joke</Button>
      </div>
    )
  }
  
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


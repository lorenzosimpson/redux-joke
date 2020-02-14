import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Joke from './components/Joke'
import "./styles.css";


function App() {

  return (
    <div className="App">
      <Joke />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />
, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//redux
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

import Joke from './components/Joke'
import "./styles.css";

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {

  return (
    <div className="App">
      <Joke />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, rootElement);

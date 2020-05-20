<<<<<<< HEAD
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import Testing from './Testing'; 
import reducer from './store/reducer'; 
import Main from './mainpage';
import Pagebar from './PageBar';
=======
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Testing from "./Testing";
import reducer from "./store/reducer";
import Main from "./mainpage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
>>>>>>> 9c511ff396fa7835198a7b46b48c8ac14462acef

const store = createStore(reducer);

export default function App() {
  return (
<<<<<<< HEAD
    <Provider store ={store}>
      <Pagebar />
      <Main />
      <Testing />
    </Provider>
=======
    <Router>
      <Switch>
        <Provider store={store}>
          <Route exact path="/" component={Main} />
          <Route exact path="/testing" component={Testing} />
        </Provider>
      </Switch>
    </Router>
>>>>>>> 9c511ff396fa7835198a7b46b48c8ac14462acef
  );
}

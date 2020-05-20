import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import Testing from './Testing'; 
import reducer from './store/reducer'; 
import Main from './mainpage';
import Pagebar from './PageBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const store = createStore(reducer);

export default function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Pagebar />
          <Route exact path="/" component={Main} />
          <Route exact path="/testing" component={Testing} />
        </Provider>
      </Switch>
    </Router>
  );
}

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import Testing from './Testing'; 
import reducer from './store/reducer'; 

const store = createStore(reducer)

function App() {
  return (
    <Provider store ={store}>
      <Testing />
    </Provider>
  );
}

export default App;

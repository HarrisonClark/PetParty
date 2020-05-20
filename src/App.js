import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Testing from "./Testing";
import reducer from "./store/reducer";
import Main from "./mainpage";
import Pagebar from "./PageBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

const store = createStore(reducer);

export default function App() {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Pagebar />
            <Route exact path="/" component={Main} />
            <Route exact path="/testing" component={Testing} />
          </Provider>
        </ThemeProvider>
      </Switch>
    </Router>
  );
}

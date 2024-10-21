import React from "react";
import ReactDOM from "react-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import App from "./App";
import "./index.css";
import "./assets/styles/app.scss";
import { Routes, Switch, Route, Link, useParams } from "react-router-dom";
import { history } from "./app/history";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
      {/* <ConnectedRouter history={history}> */}

      {/* </ConnectedRouter> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./containers/homepage";

function App(props) {
  return (
    <Router>
      <div>
        <Switch>
        <Homepage />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

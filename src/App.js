import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./containers/homepage";

function App(props) {
  return (       
    <Homepage />
  );
}

export default App;

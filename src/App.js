import React from "react";
import Auth from "./components/Auth";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Auth} />
      <Route path="/home" exact={true} component={HomePage} />
    </Switch>
  );
};

export default App;

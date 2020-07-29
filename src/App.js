import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home"
import About from "./components/About"
import NoMatch from "./components/NoMatch"

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App;

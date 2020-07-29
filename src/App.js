import React from 'react';
import './App.css';
import Home from "./components/Home"
import { Route } from 'react-router-dom';

const App = () => (
  <Route exact path="/" component={Home} />
  
)

export default App;

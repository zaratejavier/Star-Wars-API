import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home"
import About from "./components/About"
import NoMatch from "./components/NoMatch"
import Navbar from "./components/Navbar"
import {Container} from "semantic-ui-react"
import CharacterView from './components/CharacterView';
import Planets from "./components/Planets"

const App = () => (
  <>
  {/* // <div className="background"> */}
    <Navbar/>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Character/:id" component={CharacterView} />
        <Route exact path="/Planets" component={Planets}/>
        <Route component={NoMatch} />
      </Switch>
    </Container>
  {/* // </div> */}
    </>
)

export default App;

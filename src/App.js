import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';
import {CSSTransition, TransitionGroup} from "react-transition-group";


function App() {
  return (
      <Route render={({location}) => {
      return (
      <TransitionGroup component={null}>
          <CSSTransition
              timeout={300}
              classNames="page"
              key={location.key}>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/works" component={Works}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
          </CSSTransition>
      </TransitionGroup>
  );
      }}
      />
  );
}

export default App;

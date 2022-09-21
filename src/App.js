import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import HardSkills from './pages/HardSkills';
import Certificados from './pages/Certificados';
import Projetos from './pages/Projetos';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/hardskills" component={ HardSkills } />
          <Route path="/certificados" component={ Certificados } />
          <Route path="/projetos" component={ Projetos } />
        </Switch>
      </div>
    );
  }
}

export default App;

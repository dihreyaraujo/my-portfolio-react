import React, { Component } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HardSkills from './pages/HardSkills';
import Certificados from './pages/Certificados';
import Projetos from './pages/Projetos';

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/hardskills" element={ <HardSkills /> } />
          <Route path="/certificados" element={ <Certificados /> } />
          <Route path="/projetos" element={ <Projetos /> } />
        </Routes>
      </div>
    );
  }
}

export default App;

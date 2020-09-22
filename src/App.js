import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';

import Team from './Team';

import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact  path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/service' component={Service} />
      <Route exact path='/team' component={Team} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
    </>
  );
}

export default App;

import React from 'react';
import Home from '../Home';
import { Switch, Route } from 'react-router-dom';
import About from '../About';
import Service from '../Service';
import Contact from '../Contact';
import Navbar from '../Navbar';
import Footer from '../footer';
import Team from '../Team';


const  Web = () =>{

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
    <Footer />
</>
);

} ;

 export default Web;
import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Team from './Team';
import Login from './Component/Login';
import Signup from './Component/Signup';
import  Web from './wEB/wEB';



const Routi = () =>{
     return (
<>
<Switch>
         <Route exact path='/Login' component={Login} />
         <Route exact path='/Sig' component={Signup} />
         <Route exact path='/Web' component={Web} />
         <Route exact  path='/home' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/service' component={Service} />
      <Route exact path='/team' component={Team} />
      <Route exact path='/contact' component={Contact} />
         </Switch>
</>
     );
};


export default Routi;
import React from 'react';
import Home from './Page/Home';
import { Switch, Route } from 'react-router-dom';
import About from './Page/About';
import Service from './Page/Service';
import Contact from './Page/Contact';
import Team from './Page/Team';
import Login from '../Component1/Login';
import Signup from '../Component1/Signup';
import  Mainpage from './Main';



const Routi = () =>{
     return (
<>
<Switch>
         <Route exact path='/Login' component={Login} />
         <Route exact path='/Sig' component={Signup} />
         <Route exact path='/Mainpage' component={Mainpage} />
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
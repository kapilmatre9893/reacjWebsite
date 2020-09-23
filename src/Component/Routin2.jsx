import  React from 'react';
import Login from './Login';
import Signup from './Signup';
import { Switch, Route } from 'react-router-dom';
import Webg from '../wEB/wEB';



 const  mainRout = () =>{

    return(
        <>
    

         <Switch>
         <Route exact path='/Login' component={Login} />
         <Route exact path='/Sig' component={Signup} />
         <Route exact path='/Web' component={Webg} />
         {/* <Route exact  path='/home' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/service' component={Service} />
      <Route exact path='/team' component={Team} />
      <Route exact path='/contact' component={Contact} /> */}
         </Switch> 
        </>
    );

 }

 export default mainRout;
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
         </Switch> 
        </>
    );

 }

 export default mainRout;
import  React from 'react';
import Login from './Login';
import Signup from './Signup';
import { Switch, Route } from 'react-router-dom';
import Mainpage from '../Component2/Main';



 const  mainRout = () =>{

    return(
        <>
         <Switch>
         <Route exact path='/login' component={Login} />
         <Route exact path='/Sig' component={Signup} />
         <Route exact path='/mainpage' component={Mainpage} />
         </Switch> 
        </>
    );

 }

 export default mainRout;
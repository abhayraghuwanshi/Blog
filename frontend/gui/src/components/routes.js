import React from 'react'
import { Route } from 'react-router-dom'
import ListComponent from './ListComponents'
import DetailComponent from './detailcomponent'
import LoginForm from './login_form';
import Signup from './signup';
import Personal from './personal';
import SignupSuccess from './signup-success';
import changePassword from './changePassword'
import Profile from './profile';

const BaseRouter=()=>(
<div>
<Route exact path='/changePassword/' Component={changePassword}/>
    <Route exact  path='/login' component={LoginForm}/> 
    <Route exact  path='/Signup/' component={Signup}/>
    <Route exact path='/' component={ListComponent}/>
    <Route exact  path='/personal' component={Personal}/>
     {/* <Route exact path='/:articleID/' component={DetailComponent}/>  */}
     <Route exact  path='/signup-success/' component={SignupSuccess}/>
     <Route exact  path='/profile/' component={Profile}/>
     
</div>
)




export default BaseRouter;
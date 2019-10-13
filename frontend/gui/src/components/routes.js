import React from 'react'
import { Route } from 'react-router-dom'
import ListComponent from './ListComponents'
import DetailComponent from './detailcomponent'
import LoginForm from './login_form';
import Signup from './signup';
import Personal from './personal';
import SignupSuccess from './signup-success';

const BaseRouter=()=>(
<div>
    <Route exact  path='/login' component={LoginForm}/> 
    <Route exact  path='/Signup/' component={Signup}/>
    <Route exact path='/' component={ListComponent}/>
    <Route exact  path='/personal' component={Personal}/>
     {/* <Route exact path='/:articleID/' component={DetailComponent}/>  */}
     <Route exact  path='/signup-success/' component={SignupSuccess}/>
    
</div>
)




export default BaseRouter;
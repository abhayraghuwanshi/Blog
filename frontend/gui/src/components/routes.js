import React from 'react'
import { Route } from 'react-router-dom'
import ListComponent from './ListComponents'
import DetailComponent from './detailcomponent'
import LoginForm from './login_form';
import Signup from './signup';
import Personal from './personal';

const BaseRouter=()=>(
<div>
<Route exact  path='/login' component={LoginForm}/>

    <Route exact  path='/Signup/' component={Signup}/>
    <Route exact path='/' component={ListComponent}/>
    <Route exact  path='/personal' component={Personal}/>
     {/* <Route exact path='/:articleID/' component={DetailComponent}/>  */}
    
</div>
)




export default BaseRouter;
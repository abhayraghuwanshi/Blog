import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
     
      username:'',
      password1:'',
      password2:'',
      email:''
    };
   this.handle_submit=this.handle_submit.bind(this);
  }

  handle_change = (e) => {
    const {password, confirmPassword} = this.state;

    // if(password.value!== confirmPassword.value){
    //   alert("password donot match")
    // }
    
       const name = e.target.name;
       const value = e.target.value;
       this.setState(prevstate => {
         const newState = { ...prevstate };
         newState[name] = value;
       return newState;
     });
  };
 handle_submit(event){
    axios.post('http://127.0.0.1:8000/rest-auth/signup/', {
      username:this.state.username,
      password1:this.state.password1,
      password2:this.state.password2,
      email:this.state.email
    })
    .then(res=> { const token = res.data.key})
      .catch(err => {console.log(err)})
      // event.preventDefault();
console.log("submit")
}

  render() {
    
  
    const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
      
    const buttonItemLayout = {
            wrapperCol: { span: 14, offset: 4 },
          }


    return (
      <div>
        <Form layout={formItemLayout} onSubmit={this.handle_submit} >
          <Form.Item label="username" {...formItemLayout}>
            <Input placeholder="input username"
             name="username"
             value={this.state.username}
             onChange={this.handle_change}/>
          </Form.Item>
          <Form.Item label="email" {...formItemLayout}>
            <Input placeholder="input email" 
            name="email"
            value={this.state.email}
            onChange={this.handle_change}/>
          </Form.Item>
          <Form.Item label="password" {...formItemLayout}>
            <Input placeholder="input password" 
                   name="password1" 
                    type="password"
                    value={this.state.password1}
                    onChange={this.handle_change}/>
          </Form.Item>
           <Form.Item label="confirm-password" {...formItemLayout}> 
            <Input placeholder="re-enter password"
               name="password2" 
               type="password"
               value={this.state.password2}
               onChange={this.handle_change}/>
          </Form.Item>  

          <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit">Sign up</Button>
          </Form.Item>
          
        </Form>
      </div>
    );
  }
}

export default Signup

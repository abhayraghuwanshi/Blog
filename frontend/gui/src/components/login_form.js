import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import axios from 'axios'


class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
    username: '',
    password: ''
    }
    this.handleSubmit();
  
  };


  handle_change=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  
  };

  handleSubmit=(e)=>{
   // e.preventDeafult();
    console.log("handle login "+ this.state.username);
    axios.post('http://127.0.0.1:8000/rest-auth/login/', {
      username:this.state.username,
      password:this.state.password
    }
    )
     .then((res) =>{
       if(res.data.code == 400){
          console.log("error");
       }
      })}
       
        
      //    const token = this.res.key;
      //  localStorage.setItem('token', token);
      //  })
      // .catch(err => {console.log(err)})
      
      
  

  render() {
    localStorage.setItem('abhay',18121002);
    return (
       <Form className="login-form" onSubmit={this.handleSubmit} >
        <Form.Item label="username">
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handle_change}
            />
        </Form.Item>
        <Form.Item label="password">
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handle_change}
            />
        </Form.Item>
        <Form.Item>
          <Button type="submit" htmlType="submit" onClick={this.handleSubmit} className="login-form-button">
            Log in
          </Button><br/>
          Or <a href="/Signup">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}



export default LoginForm;

// LoginForm.propTypes = {
//   handle_login: PropTypes.func.isRequired
// };
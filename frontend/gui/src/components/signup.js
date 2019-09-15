import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
      username:'',
      password:'',
      email:''
    };
    this.handle_signup=this.handle_signup.bind(this);
  }
  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/auth/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
   
      .then(res => res.json())
      .then(json => console.log(json))
      .then(json => {
        localStorage.setItem('token',json.token);
        this.setState({
          username: json.username
        });
      });
  };


  handle_change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };
 


  render() {
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : null;
    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : null;


    return (
      <div>
        <Form layout={formLayout} onSubmit={this.handle_signup}>
          
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
                   name="password" 
                    type="password"
                    value={this.state.password}
                    onChange={this.handle_change}/>
          </Form.Item>
          {/* <Form.Item label="Re-enter password" {...formItemLayout}> 
            <Input placeholder="input password"
               name="password2" 
               type="password"
               value={this.state.password2}
               onChange={this.handle_change}/>
          </Form.Item>*/}

          <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit">Sign up</Button>
          </Form.Item>
          
        </Form>
      </div>
    );
  }
}

export default Signup


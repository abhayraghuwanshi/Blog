import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {

  state = {
    username: '',
    password: '',
    logged_in:false
  };

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/auth/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          username: json.user.username
        });
      });
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };


  render() {
    return (
      <Form  onSubmit={e => this.props.handle_login(e, this.state)} className="login-form">
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
              value={this.state.password}
              onChange={this.handle_change}
            />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button><br/>
          Or <a href="/Signup">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}



export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};
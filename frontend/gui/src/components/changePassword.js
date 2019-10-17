import React from 'react';
import { Form, Input, Button ,Alert} from 'antd';
import axios from 'axios';






class changePassword extends React.Component {
  constructor() {
    super();
    this.state = {
      password:'',
      password1:'',
      password2:''

    };
   this.handle_submit=this.handle_submit.bind(this);
  }

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
    
  
    const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
      
    const buttonItemLayout = {
            wrapperCol: { span: 14, offset: 4 },
          }


    return (
      <div>
        ok
        <Form layout={formItemLayout} >
          <Form.Item label="old-password" {...formItemLayout}>
            <Input placeholder="input email" 
            name="email"
            value={this.state.password}
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

export default changePassword;

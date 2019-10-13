import React from 'react';
import { Result, Button } from 'antd';
import { Link}  from 'react-router-dom'


class SignupSuccess extends React.Component {   

  render() {
    return (
        <Result
        status="success"
        title="Successfully Signed In!"
        extra={[
          <Button key="buy"><Link to='/login/'>Log-In</Link></Button>
        ]}
      />
    );
  }
}


export default SignupSuccess;
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu ,Button} from 'antd';
const { Header, Content  } = Layout;


class CustomLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          logged_in: localStorage.getItem('token') ? true : false  };
               }

               renderButton(){
                if(this.state.logged_in){
                    return( <Menu.Item key="5" style={{float:'right',display:'none'}}>Logout</Menu.Item>)
                    }
                    else{
                         return(<div style={{display:'flex', }}> 
                          <div>
                              hey <Menu.Item key="4" style={{  }}><Link to='/login'>Login</Link></Menu.Item></div> 
                   <div><Menu.Item  key="3" style={{marginLeft: '20px'}}><Link to='/Signup/'> Sign-up</Link></Menu.Item></div>
                        </div>)
                    }
                }

        render() {
     
        return(
            <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    // defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                   <Menu.Item key="1"><Link  to="/">Home</Link></Menu.Item> 
                   <Menu.Item key="2"><Link to='/personal'>Personal</Link></Menu.Item>
                   <Menu.Item ><Link to='/Signup/'> Sign-up</Link></Menu.Item>
                 {this.renderButton()}
               
            

                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{this.props.children}</div>
                </Content>
            
            </Layout>
    )
}
}
export default CustomLayout;


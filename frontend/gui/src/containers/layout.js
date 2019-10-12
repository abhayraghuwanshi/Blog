import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu,Breadcrumb } from 'antd';
const { Header, Content  } = Layout;
// import LoginForm from '../components/login_form'



class CustomLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         // logged_in: localStorage.getItem('token') ? true : false  };
           logged_in:true
               }
               this.logout=this.logout.bind(this);
            }

       logout(){
                   localStorage.removeItem('user');
               }

               renderButton(){
                    if(this.state.logged_in)
                        return(<div >
                    {/* <div><Link to='/Signup/'> Sign-up</Link></div>
                   <div><Link to='/login/'> Login</Link></div> */}
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><Link to='/signup/'>Signup</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to='/login/'>Login</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    </div>
                    )
                    else
                    return(
                        <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><Link to='/logout/'>Logout</Link></Breadcrumb.Item>
                     </Breadcrumb>)
                }

        render() {
     
        return(
            <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu  theme="dark"  mode="horizontal"  defaultSelectedKeys={['1']}  style={{ lineHeight: '64px' }}>      
                   <Menu.Item key="1"><Link  to="/">Home</Link></Menu.Item> 
                   <Menu.Item key="2"><Link to='/personal'>Personal</Link></Menu.Item>
                  
               {/* {
                   if(this.state.logged_in)
                       return{
                   <Menu.Item style={{float:'right'}}><Link to='/Signup/'> Sign-up</Link></Menu.Item>
                   <Menu.Item style={{float:'right'}}><Link to='/login/'> Login</Link></Menu.Item>
                   }
                   else
                   return<Menu.Item style={{float:'right'}}><Link to='/login/'> Logout</Link></Menu.Item>
                } */}
                    
                </Menu>
                </Header>


                <Content style={{ padding: '0 50px' }}>
                
                {this.renderButton()}
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                {this.props.children}</div>
                </Content>
            
            </Layout>
    )
}
}
export default CustomLayout;


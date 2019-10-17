import { List, Avatar, Icon } from 'antd';
import React from 'react'
import axios from 'axios'




const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            listData:[]
        }
      }

      componentDidMount(){
         axios.get('http://127.0.0.1:8000/api/')
          .then(res=>{this.setState({listData:res.data })})
          
      }

    render() {
                return(
                 <div>
              
             <List
                  itemLayout="vertical"
                  size="large"
                  pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    pageSize: 3,
                  }}
                  dataSource={this.state.listData}
                  
                  renderItem={item => (
                    <List.Item
                      key={item.title}
                      actions={[
                        <IconText type="star-o" text="0" key="list-vertical-star-o" />,
                        <IconText type="like-o" text="0" key="list-vertical-like-o" />,
                        <IconText type="message" text="0" key="list-vertical-message" />,
                      ]}  

                      extra={
                        <img
                          width={272}
                          alt="logo"
                          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.pn"/>
                          }
                        >
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={`/${item.id}/`}>{item.title}</a>}
                        description={item.description}/>

                      {item.content}
                    </List.Item>
                     )}/>
                    
                     </div>
    )
}
}

export default ListComponent;

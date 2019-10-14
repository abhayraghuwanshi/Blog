import React from 'react'
import { Card ,Button} from 'antd'
import axios from 'axios'
import UserForm from './form';
import accountSetting from './accountSetting'

class DetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            article:{}
        }
        this.onDelete=this.onDelete.bind(this);
      }

      componentDidMount(){
          const articleID = this.props.match.params.articleID;
          axios.get(`http://127.0.0.1:8000/api/${articleID}/`)
          .then(res => {
              this.setState({
                  article:res.data 
              })
          })
      }

      onDelete(event){
        const articleID = this.props.match.params.articleID;
        axios.delete(`http://127.0.0.1:8000/api/${articleID}/`);
       
        this.props.history.push('/');
        window.forceUpdate();
      }

    render() {
    return(
        <div>
            <accountSetting/>
            <Card title={this.state.article.title} >
                <p>{this.state.article.content}</p>
            </Card><br/>
            <h1>Form</h1>
            <UserForm typeofmethod='put' articleID={this.props.match.params.articleID} buttontext='Replace'/>
            <form>
                <Button type="danger" onClick={this.onDelete} htmlType="submit">Delete</Button>
            </form>
        </div>
        )}
    
    

}

export default DetailComponent;

import React from 'react';
import { Form, Input, Button } from 'antd'
import axios from 'axios'


class UserForm extends React.Component{
  

    onHandleFormSubmit=(event,typeofmethod,articleID)=>{
        const title= event.target.elements.title.value;
        const content= event.target.elements.content.value; 
        console.log(title,content); 


        switch(typeofmethod) {
            case 'put':
              return  axios.put(`http://127.0.0.1:8000/api/${this.props.articleID}/`,{
                    content:content,
                    title:title 
                })
                .then(res=>
                    console.log(res))
                .catch(err=>console.log(err));
                        
            case 'post':
             return  axios.post('http://127.0.0.1:8000/api/',{
                    content:content,
                    title:title 
                })
                .then(res=>
                    console.log(res))
                .catch(err=>console.log(err));
          
          }
          this.window.forceUpdate();
    }
    render(){
        return(

            <Form   onSubmit={(event)=>this.onHandleFormSubmit(
                event,
                this.props.typeofmethod,
                this.props.articleID
            )}>
            <Form.Item  label="title" >
                <Input name="title" placeholder="enter title" />
            </Form.Item>
            <Form.Item   label="content" >
                <Input name="content" placeholder="enter content" />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">{this.props.buttontext}</Button>
            </Form.Item>
        </Form>
            )
    }
}  


export default UserForm;
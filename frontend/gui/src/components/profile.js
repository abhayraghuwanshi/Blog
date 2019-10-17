import React from 'react';
import {Avatar} from 'antd';
import axios from 'axios';


class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
     selectedFile:null
    }; 
  }

  handleImage = event => {
              console.log(event);
              this.setState({
                  selectedFile:this.event.target.file[0]
              })
             }

    handleUpload = event => {
        axios.post()
    }


  render() {
    return (
      <div>
           <Avatar size={300} icon="user" />
           <input type="file" onChange={this.handleImage}/>
           <button onClick={this.handleUpload}>Upload</button>
      </div>
    );
  }
}

export default Profile;

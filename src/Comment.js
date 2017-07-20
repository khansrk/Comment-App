import React, { Component } from 'react';
import { Panel,Button } from 'react-bootstrap';
import axios from 'axios';
import './comment.css';
import Edit from './Edit';
import Increment from './Increment.js';
import UserForm from './Form.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class Comment extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading:true,
    }
  }

  componentDidMount () {
      this.onHandle();
  }

onHandle = () =>{
  axios.get('https://596f3b2edc0ff600110c6ea6.mockapi.io/comments')
  .then((result) => {
    this.setState({
      isLoading:false,
      data:result.data,
    })
  });
}

onDelete = (id) =>{
  axios.delete('https://596f3b2edc0ff600110c6ea6.mockapi.io/comments/' + id)
  .then(() =>{
    this.onHandle();
  })
}

  render(){
    if(this.state.isLoading){
      return(
        <div className = "text-center">Loading</div>
      )
    }
    else{
      return(
        <div className="text-center container mycont">
        <h1>Comment System</h1>
        {this.state.data.map((res) =>
          <Panel className = "mypanel"><strong>Name:</strong>{' '}{res.name}<br/><strong>Message:</strong>{' '}{res.message}</Panel>
          <Button onClick = {()=>this.onDelete(res.id)}>Delete</Button>
          <MuiThemeProvider><Edit val = {res.message} id = {res.id} onget = {this.onHandle}/></MuiThemeProvider>
          <Increment value = {res.likes} id = {res.id} onget = {this.onHandle}/>
        )}
        <UserForm onget = {this.onHandle}/>
        </div>
      )
    }

  }
}

import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';

class Edit extends Component{
  constructor(props){
    super(props);
    this.state = {
      edit:false,
    }
  }
  onEdit = () =>{
    this.setState({
      edit:true,
    })
  }

  save = (id) =>{
    console.log(this.input.value);
    var val = this.input.value
     this.setState({
       edit: false
     })
     axios.put('https://596f3b2edc0ff600110c6ea6.mockapi.io/comments/' + id,{message: val})
     .then(() =>{
       this.props.onget();
     })
  }

  render(){
          if(this.state.edit){
            return(
            <div>
            <textarea ref={(ref)=>this.input=ref} defaultValue={this.props.val}></textarea>
            <Button onClick={()=>this.save(this.props.id)}>Save</Button></div>
          )
      }
        else {
        return(
          <Button onClick = {this.onEdit}>Edit</Button>
        )
      }
  }
}

export default Edit;

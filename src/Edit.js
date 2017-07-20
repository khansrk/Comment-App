import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';


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
            <textarea9 defaultValue={this.props.val}></textarea>
              <TextField
               ref={(ref)=>this.input=ref}
               defaultValue = {this.props.val}
               multiLine={true}
               rows={5} /><br />
            <RaisedButton label="Save" onClick={()=>this.save(this.props.id)} primary={true} />
          )
      }
        else {
        return(
          <RaisedButton label="Edit" onClick={this.onEdit} primary={true} />
        )
      }
  }
}

export default Edit;

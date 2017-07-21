import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default class Increment extends Component{
  constructor(props){
    super(props);
    this.state = {
      count:this.props.value,
    }
  }

  onLike = (id) =>{
    axios.put('https://596f3b2edc0ff600110c6ea6.mockapi.io/comments/' + id,{likes: this.state.count + 1})
    .then(() =>{
      this.props.onget();
    })
  }

  render(){
    return(
      <Button onClick={()=>this.onLike(this.props.id)}>{this.props.value}</Button>
    )
  }

}

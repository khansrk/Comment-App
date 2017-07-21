import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

var textstyle = {
  marginTop:"10px",
}
export default class UserForm extends Component {
      constructor(props) {
      super(props);
        this.state = {
          name: '',
          message: '',
        };
      }

      onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
      }


      onSubmit = (e) => {
        e.preventDefault();
        const { name, message} = this.state;
        this.setState({
          name:'',
          message:''
        })

        axios.post('https://596f3b2edc0ff600110c6ea6.mockapi.io/comments', {name: name, message: message })
          .then(() => {
            this.props.onget();

          });
      }

      render() {
        const { name, message, } = this.state;
          return(
           <div>
             <br />
          <form onSubmit={this.onSubmit}>
            <input type="text" name="name" value={name} onChange={this.onChange} placeholder = "enter name" required/><br/>
            <textarea name="message" value={message} onChange={this.onChange} placeholder = "enter message" style={textstyle} required></textarea><br/>
            <Button type="submit">Comment</Button>
          </form>
          </div>
        )

      }
    }

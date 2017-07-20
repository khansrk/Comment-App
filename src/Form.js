import React, { Component } from 'react';
import axios from 'axios';



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
          <form onSubmit={this.onSubmit}>
            <input type="text" name="name" value={name} onChange={this.onChange} />
            <textarea name="message" value={message} onChange={this.onChange}></textarea>
            <button type="submit">Submit</button>
          </form>
          </div>
        )

      }
    }

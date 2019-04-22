import React, { Component } from 'react';

import { Link } from "react-router-dom"



class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {name:'',email:'',password:'',confirm:''};
  
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
    handleSubmit(event) {
  console.log('Full Name' + this.state.name,'email: ' +this.state.email,'password: '+this.state.password,'confirm; '+this.state.confirm);
  event.preventDefault();
  let dumb=this.state;
debugger
fetch('http://localhost:5000/', {
  method: 'POST',
  body: JSON.stringify(this.state),
  headers: {
    'Content-Type': 'application.json'
    
  }
}
)
  }
  render() {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" class="form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" 
            onChange={event=> this.setState({name:event.target.value})}/>

          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email Address</label>
            <input type="email" class="form-control-sm" id="exampleInputPassword1" placeholder="Email Address" 
            onChange={event=> this.setState({email:event.target.value})}/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control-sm" id="exampleInputPassword1" placeholder="Password" 
            onChange={event=> this.setState({password:event.target.value})}/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input type="password" class="form-control-sm" id="exampleInputPassword1" placeholder="Password" 
            onChange={event=> this.setState({confirm:event.target.value})}/>
          </div>
          <button type="submit">Submit</button>
        </form>

        <Link to="/">Login</Link>

      </div>
    )
  }
}

export default Register;


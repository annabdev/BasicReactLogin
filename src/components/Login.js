import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Login extends Component {
  constructor(props) {
  super(props);
  this.state = {email:'',password:''};

  this.handleSubmit = this.handleSubmit.bind(this);
  
  }

 

  handleSubmit(event) {
console.log('email: ' + this.state.email,'password: ' +this.state.password);
event.preventDefault()


const App = async props => {
  const res = await fetch('http://localhost:3000')
  const data = await res.json()

  return (
    <h1>Hello {data}</h1>
  )
}

module.exports = App
let dumb=this.state;
debugger
fetch('http://localhost:5000/', {
  method: 'POST',
  body: JSON.stringify(dumb),
  headers: {
    'Content-Type': 'application.json'
    
  }
}
)
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
   
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
              onChange={event=> this.setState({email:event.target.value})}
              />
            </div>
            
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control-sm" id="exampleInputPassword1" placeholder="Password"
              onChange={event=> this.setState({password:event.target.value})}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        


        <Link to="/Register">Register</Link>

      </div>
    )}
  
      };

export default Login;

//                
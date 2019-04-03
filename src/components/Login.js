import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Login extends Component {
  state = {}
  render() {
    return (
      <div>
        <h2>Login</h2>
   
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
              />
            </div>
            
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control-sm" id="exampleInputPassword1" placeholder="Password"
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
import React, { Component } from 'react';

import { Link } from "react-router-dom"



class Register extends Component {
  render() {
    return (
      <div>
        <h2>Register</h2>
        <form>
<div class="form-group">
<label for="exampleInputEmail1">Full Name</label>
<input type="text" class="form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name"/>

</div>
<div class="form-group">
<label for="exampleInputEmail1">Email Address</label>
<input type="email" class="form-control-sm" id="exampleInputPassword1" placeholder="Email Address"/>
</div>
<div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control-sm" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="password" class="form-control-sm" id="exampleInputPassword1" placeholder="Password"/>
  </div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>

        <Link to="/">Login</Link>
        
      </div>
    )
    }}

export default Register;

//   
import React, { Component } from 'react';
import { Link } from "react-router-dom"


class Register extends Component {
    render() {
        return (
            React.createElement('form', {className: 'Username'},
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Username (required)', 
                }),
                <br />,
            React.createElement('form', {className: 'Password'},  
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Password (required)'
                }),
                React.createElement('button', {type: 'Login'}, "Login"),       
            
            )) )}
};
                export default Register;
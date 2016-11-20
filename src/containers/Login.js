import React, { Component } from 'react';
import { initAuth, login, logout } from '../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Login extends Component {
  
  
  login = () => {
    this.props.login();
  }
  
  logout = () => {
    this.props.logout();
  }
  
  componentDidMount() {
    //this.props.initAuth();
  }
  
  render() {
    return (
      <div>
        <div><Link to={`/m`}>Go To M</Link></div>
        {this.props.status}
        {( this.props.inProgress ? 'Loading....' :
        ( this.props.connected ?
          <button onClick={this.logout}>Logout</button>
        : <button onClick={this.login}>Login</button>
        ))}
        
      </div>
    );
  }
}

export default connect(
  (state) => {return { 
    connected: state.auth.connected,
    inProgress: state.auth.inProgress 
  }},
  { initAuth, login, logout }
)(Login);
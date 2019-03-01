import React, { Component } from 'react';
import './App.css';

import { Route, NavLink, withRouter } from 'react-router-dom';

import './App.css';
import Login from './login/Login.js';
import Jokes from './jokes/Jokes.js';
import Register from './register/Register.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/register" className="navlink">Register</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/login" className="navlink">Login</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/jokes" className="navlink">Jokes</NavLink>
            &nbsp;|&nbsp;
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/jokes" component={Jokes} />
        </main>
      </div>
    );
  }
  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  };
}

export default withRouter(App);

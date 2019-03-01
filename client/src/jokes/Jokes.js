import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';

class Users extends React.Component {
  state = {
    jokes: [],
  };

  render() {
    return (
      <>
        <h2>Dad Jokes</h2>
        <ul>
          {this.state.jokes.map(joke => (
            <li key={joke.id}>{joke}</li>
            
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    axios.get('/users').then(res => {
      this.setState({ users: res.data.users });
    });
  }
}

export default requiresAuth(Users);
import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <>
        <h2>Welcome</h2>
        <h3>Please Register</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" />
            <input
              placeholder="Username"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
            />
          </div>
          <br/> 
          <div>
            <label htmlFor="password" />
            <input
              placeholder="Password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
            />
          </div>
          <br/>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </>
    );
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = 'http://localhost:3300/api/register';

    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);

        this.props.history.push('/login');
      })
      .catch(error => console.error(error));
  };
}

export default Register;
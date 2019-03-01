import React from "react";
import axios from "axios";

import requiresAuth from "../auth/requiresAuth";

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  render() {
      const token = localStorage.getItem('jwt')
      if (token){
        return (
        <>
        <h2>Dad Jokes are funny...</h2>
        <ul>
          {this.state.jokes.map(joke => (
            <li key={joke.id}>{joke.joke}</li>
          ))}
        </ul>
      </>
    );
  } else {
      return (
        <h2> Login in to see the funny jokes</h2>
      )
       
  }
  }
  componentDidMount() {
    axios.get('/jokes').then(res => {
        this.setState({ jokes: res.data });
      });
   
}
}

export default requiresAuth(Jokes);

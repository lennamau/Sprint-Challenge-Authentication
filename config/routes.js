const axios = require('axios');

const { authenticate, generateToken } = require('../auth/authenticate');

const db = require('../database/dbConfig')

const bcrypt = require('bcryptjs')



module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  let user = req.body
  const hash = bcrypt.hashSync(user.password, 10); 
  user.password = hash;
  if (req.body.username && req.body.password) {
    db('users')
      .insert(user)
      .then(ids => {
        const id = ids[0]
        db('users')
          .where('id', id)
          .then(user => {
            const token = generateToken(user);
            res
              .status(201)
              .send(token);
          })
          .catch(err => {
            res
              .status(500)
              .json({message: 'Could not register at this time'});
          })
      })
      .catch(err => {
        res
          .status(500)
          .json({message: 'Could not register at this time'});
      });
  }
  else {
    res
      .status(400)
      .json({message: 'Provide a username and password'});
  }
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}

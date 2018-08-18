const express = require('express');
const api = express.Router();

api.get('/api/test/get', (req, res) => {
  res.send('test');
});

api.post('/api/test/post', (req, res) => {
  res.send(req.body);
});

module.exports = api;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3005;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('<h1>It works.</h1><p>This is a default web page for server.</p>');
});

app.use('/', require('./routes/routes'));

app.listen(port, function () {
  console.log('listening on port http://localhost:'+port);
});

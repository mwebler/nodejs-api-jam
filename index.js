'use strict'

const app = require('./config/express');
const env = require('./config/env');
const mongoose = require('mongoose');
const port = env.getPort();

// Initialize mongo db connection
mongoose.Promise = global.Promise;
mongoose.connect(env.getMongoUrl());

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port , () => {
  console.log('Service running on port', port);
  console.log('other = ', process.env.PORT);
  console.log('Connected to database', env.getMongoUrl());
});

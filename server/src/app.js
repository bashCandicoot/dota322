require('dotenv').config({ path: '.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// app.use('/', express.static('../../client'));
app.get('/', (req, res) => {
  res.send({
    message: 'hellos',
  });
});

app.post('/register', (req, res) => {
  res.send({
    message: `Hi ${req.body.email}`,
  });
});

module.exports = app;

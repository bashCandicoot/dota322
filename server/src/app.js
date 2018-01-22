require('dotenv').config({ path: '.env' });

const express = require('express');

const app = express();

app.use('/', express.static('../../client'));

// app.get('/', (req, res) => {
//   res.send({
//     message: 'hello',
//   });
// });

module.exports = app;

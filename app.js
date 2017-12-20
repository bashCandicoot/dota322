const express = require('express')
const app = express()

require('dotenv').config({ path: '.env'})

app.use('/', express.static('.'))

module.exports = app;
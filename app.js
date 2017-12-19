const express = require('express')
require('dotenv').config({ path: '.env'})

const app = express()
app.use('/', express.static('.'))

app.set('port', process.env.port)
const server = app.listen(app.get('port'))
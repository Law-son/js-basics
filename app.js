const express = require('express');
const bodyParser = require('body-parser');

const authenticationRoute = require('./routes/authentication.route');
const noteRoute = require('./routes/note.route');

const app = express();

app.use(bodyParser.json());

//routes
app.use('/auth', authenticationRoute);
app.use('/notes', noteRoute);

module.exports = app;
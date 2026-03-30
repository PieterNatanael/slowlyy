const express = require('express');
const dateRoute = require('./routes/date');

const app = express();

app.use('/date', dateRoute);

module.exports = app;

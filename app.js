const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const env = require("dotenv");

const app = express();

const taskRoute = require('./routes/taskRoute');

const apiURL = '/api/v1/';

app.use(cors());
app.use(express.json());

app.use(apiURL + 'task/', taskRoute);

module.exports = app;

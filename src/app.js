const express = require('express');
const app = express();
const register = require('./routes/register');


app.use('/register', register);

app.listen('3000','0.0.0.0');
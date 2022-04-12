const express = require('express');
const app = express();
const register = require('./routes/auth/authentication');


app.use('/authentication', register);

app.listen('3000','0.0.0.0');
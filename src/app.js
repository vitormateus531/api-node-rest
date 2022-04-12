const express = require('express');
const app = express();
const authentication = require('./routes/auth/authentication');
const list = require('./routes/contactList');


app.use('/authentication', authentication);
app.use('/contact/list', list);

app.listen('3000','0.0.0.0');
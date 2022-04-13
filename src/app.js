const express = require('express');
const app = express();
const authentication = require('./routes/auth/authentication');
const list = require('./routes/contactList');
const create = require('./routes/insertContact');


app.use('/authentication', authentication);
app.use('/contact/list', list);
app.use('/contact/create', create);

app.listen('3000','0.0.0.0');
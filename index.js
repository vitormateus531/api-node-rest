const express = require('express');
const app = express();
const routeCadastroAuth = require('./routes/cadastroAuth');
const mysql = require('./core/dbMysql');
const pg = require('./core/dbPostgree');

app.use('/cadastro', routeCadastroAuth);

app.listen('3000','0.0.0.0');
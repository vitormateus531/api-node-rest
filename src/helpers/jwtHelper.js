const JWT = require('jsonwebtoken');
require('dotenv').config();

async function  generateToken(name,password,workplace){
    let token = JWT.sign({ name: name,password: password, workplace: workplace}, process.env.SECRET_KEY_JWT);
    console.log(process.env)
    return token;
}

module.exports = {generateToken};
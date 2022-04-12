const { verify } = require('crypto');
const JWT = require('jsonwebtoken');
require('dotenv').config();

async function  generateToken(name,password,workplace){
    let token = JWT.sign({ name: name,password: password, workplace: workplace}, process.env.SECRET_KEY_JWT);
    return token;
}

async function verifyToken(token){
    try {
        var decoded = JWT.verify(token, process.env.SECRET_KEY_JWT);
        return decoded;
    } catch(err) {
        return 'token inválido';
    }
}

module.exports = {generateToken,verifyToken};
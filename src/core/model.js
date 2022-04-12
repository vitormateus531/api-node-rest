const postgres = require('./dbPostgree');
const mysql = require('./dbMysql');


async function contacts(workplace){
    switch(workplace){
        case 'macapa':
            mysql.listContact();
            break;
        default:
            postgres.listContact();
    }
}

async function existUser(data){
    let result;
    switch(data.workplace){
        case 'macapa':
            result = await mysql.verifyIfExistsUsers(data);
            break;
        default:
           result = await postgres.verifyIfExistsUsers(data);
    }
    return result;
}

module.exports = {contacts, existUser}
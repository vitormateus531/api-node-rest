const postgres = require('./dbPostgree');
const mysql = require('./dbMysql');


async function contacts(workplace){
    let result;
    switch(workplace){
        case 'macapa':
            await mysql.listContact();
            break;
        default:
            await postgres.listContact();
    }
    return result;
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

async function insertContact(data){
    let result = 'contato inserido com sucesso.';
    try{
        switch(data.workplace){
            case 'macapa':
                await mysql.insertContacts(data);
                break;
            default:
               await postgres.insertContacts(data);
        }
        return result;
    }catch(e){
        result = e;
    }
}

module.exports = {contacts, existUser, insertContact}
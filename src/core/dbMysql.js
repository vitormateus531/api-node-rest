
async function connect(){
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://admin:admin@mysql/admin");
    global.connection = connection;
    return connection;
}

async function insertUsers(data){
    const conn = await connect();
    const sql = 'insert into users(name, password) values (?, ?)';
    const values = [data.name, data.password];
    await conn.query(sql, values);
}

async function verifyIfExistsUsers(data){
    const conn = await connect();
    const values = [data.name, data.password];
    const [rows] = await conn.query('SELECT count(*) as countUser FROM users WHERE name = ? and password = ?', values);
    return rows;
}

async function listContact(data){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM contacts');
    return rows;
}


module.exports = {insertUsers, verifyIfExistsUsers, listContact};
 
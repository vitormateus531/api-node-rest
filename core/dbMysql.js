
async function connect(){

    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://admin:admin@mysql/admin");
    global.connection = connection;
    return connection;
}

connect();

module.exports = {};
 
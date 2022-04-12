async function connect() {
 
    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://admin:admin@postgresql:5432/adminServ'
    });
 
    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

async function insertUsers(data){
    const client = await connect();
    const sql = 'INSERT INTO "users"(name,password) VALUES ($1,$2)';
    const values = [data.name, data.password];
    return await client.query(sql, values);
    
}

async function verifyIfExistsUsers(data){
    const conn = await connect();
    const values = [data.name, data.password];
    const res = await conn.query('SELECT count(*) as countUser FROM users WHERE name = $1 and password = $2', values);
    return res.rows;
}

module.exports = {insertUsers, verifyIfExistsUsers};
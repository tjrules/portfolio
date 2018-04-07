const { Pool } = require('pg')

const pool = new Pool()

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}

const pg = require('pg');
const pool = new pg.Pool({
user: 'postgres',
host: '127.0.0.1',
database: 'test',
password:'tj9753tj',
port: '5432'});

pool.query('SELECT NOW()', (err, res) => {
console.log(err, res);
pool.end();
});
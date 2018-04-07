const options = {
    receive: (data, result, e) => {},
    query: (e) => {}
};

const pgp = require('pg-promise')(options);

function setDatabase() {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV) {
        return pgp({
            database: 'portfolio',
            port: 5432,
            host: 'localhost',
            user: 'postgres',
            password: process.env.PGPASSWORD
        });
    } else if (process.env.NODE_ENV === 'production') {
        return pgp(process.env.DATABASE_URL);
    }
};

const db = setDatabase();

module.exports = db;

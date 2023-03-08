const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: 'password1',
    host: "192.168.0.196",
    port: 5432,
    database: "geocoder_test"
});

module.exports = pool;
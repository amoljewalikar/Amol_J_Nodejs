const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Student_DB",
    password: "amol1234",
    port: 5432
})


module.exports = pool
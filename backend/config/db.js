import pg from "pg";

const pool = new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'conya1405',
    database: 'likeme',
    allowExitOnIdle: true
})

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.log('Error connectin to DB', err)
    } else {
        console.log('🔋 DB-Connected', res.rows[0].now)
    }
})

export default pool;
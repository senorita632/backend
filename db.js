const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',  // If you have a password, update it here
    database: process.env.DB_NAME || 'backend'
});

db.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
        process.exit(1); // Stop the server if DB fails
    } else {
        console.log('✅ Database connected successfully');
    }
});

module.exports = db;

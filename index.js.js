const express = require('express');
const cors = require('cors');
const stockRoutes = require('./routes/stockRoutes');  // Ensure correct import
const db = require('./models/db');  // Ensure database connection

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/stock', stockRoutes);

// ✅ Log when the server starts
app.listen(8000, () => {
    console.log('✅ Server running on port 8000');
});

// ✅ Log to confirm the route is loaded
console.log('✅ Stock routes loaded');

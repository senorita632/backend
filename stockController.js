const db = require('../models/db'); // Ensure database connection is imported

exports.getStockAlerts = async (req, res) => {
    try {
        console.log("Stock alert API called"); // Debugging log

        const query = `
            SELECT id, name, stock_quantity
            FROM products
            WHERE stock_quantity <= 10;
        `;

        db.query(query, (err, results) => {
            if (err) {
                console.error("Database query error:", err); // Log actual error
                return res.status(500).json({ error: "Database query error" });
            }

            if (results.length === 0) {
                return res.status(200).json({ message: "All products are sufficiently stocked." });
            }

            return res.status(200).json({ lowStockProducts: results });
        });

    } catch (error) {
        console.error("Internal Server Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

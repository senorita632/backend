const db = require("./db");

// Get all stock items
exports.getAllStock = (callback) => {
    db.query("SELECT * FROM stock", callback);
};

// Get single stock item by ID
exports.getStockById = (id, callback) => {
    db.query("SELECT * FROM stock WHERE id = ?", [id], callback);
};

// Add new stock
exports.addStock = (order_id, product_id, quantity, threshold, callback) => {
    db.query(
        "INSERT INTO stock (order_id, product_id, quantity, threshold) VALUES (?, ?, ?, ?)",
        [order_id, product_id, quantity, threshold],
        callback
    );
};

// Update stock quantity
exports.updateStock = (id, quantity, callback) => {
    db.query("UPDATE stock SET quantity = ? WHERE id = ?", [quantity, id], callback);
};

// Delete stock
exports.deleteStock = (id, callback) => {
    db.query("DELETE FROM stock WHERE id = ?", [id], callback);
};

// Get stock alerts (low stock items)
exports.getStockAlerts = (callback) => {
    db.query("SELECT * FROM stock WHERE quantity <= threshold", callback);
};

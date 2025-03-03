const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

router.get('/alerts', stockController.getStockAlerts);

module.exports = router;

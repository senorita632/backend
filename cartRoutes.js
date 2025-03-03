const express = require('express');
const { addItemToCart, getCartItems, updateCartQuantity, removeCartItem } = require('../controllers/cartController');

const router = express.Router();

router.post('/', addItemToCart);             // Add item to cart
router.get('/:user_id', getCartItems);       // View cart items
router.put('/:cart_id', updateCartQuantity); // Update quantity
router.delete('/:cart_id', removeCartItem);  // Remove item from cart

module.exports = router;

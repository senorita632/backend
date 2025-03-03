const Cart = require('../models/Cart');

exports.addItemToCart = async (req, res) => {
    try {
        const { user_id, product_id, quantity } = req.body;
        const result = await Cart.addItem(user_id, product_id, quantity);
        res.status(201).json({ message: 'Item added to cart', cart_id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCartItems = async (req, res) => {
    try {
        const user_id = req.params.user_id;
        const cartItems = await Cart.getCart(user_id);
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCartQuantity = async (req, res) => {
    try {
        const { cart_id } = req.params;
        const { quantity } = req.body;
        await Cart.updateQuantity(cart_id, quantity);
        res.json({ message: 'Cart updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.removeCartItem = async (req, res) => {
    try {
        const { cart_id } = req.params;
        await Cart.removeItem(cart_id);
        res.json({ message: 'Item removed from cart' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

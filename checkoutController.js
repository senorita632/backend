const Cart = require('../models/Cart');

exports.checkout = async (req, res) => {
    try {
        const { user_id } = req.body;
        
        // Fetch user cart items
        const cartItems = await Cart.getCart(user_id);
        if (cartItems.length === 0) {
            return res.status(400).json({ message: 'Cart is empty' });
        }

        // Simulate order placement (You can integrate Stripe or PayPal here)
        res.json({ message: 'Checkout successful', order: cartItems });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

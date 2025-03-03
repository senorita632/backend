const express = require('express');
const dotenv = require('dotenv');
const cartRoutes = require('./routes/cartRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/cart', cartRoutes);
app.use('/checkout', checkoutRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

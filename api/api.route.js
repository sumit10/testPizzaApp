const express = require('express');
const pizzaRoute = require('./pizza/route');
const discountRoutes = require('./discount/route');
const checkoutRoutes = require('./checkout/route');
const router = express.Router(); 

router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/pizza', pizzaRoute);
router.use('/discount', discountRoutes);
router.use('/checkout', checkoutRoutes);

module.exports = router;
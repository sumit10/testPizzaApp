const express = require('express');
const Ctrl = require('./controller');
const router = express.Router();

router.route('/order')
  .post(Ctrl.checkOut)

module.exports = router;
const express = require('express');
const Ctrl = require('./controller');
const router = express.Router();

router.route('/check')
  .post(Ctrl.check)

module.exports = router;
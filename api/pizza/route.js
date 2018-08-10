const express = require('express');
const Ctrl = require('./controller');
const router = express.Router();

router.route('/')
  .get(Ctrl.getData)

module.exports = router;
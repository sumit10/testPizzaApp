'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    "name": String,
    "ingredients":[],
    "grossAmount": Number,
    "netAmount":Number,
    "cupponCode":String
  });

  module.exports = mongoose.model('Order', OrderSchema);
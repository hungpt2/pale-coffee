'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  user_name: {
    type: String,
    required: 'Please input username!'
  },
  password: {
    type: String,
    required: 'Please input password!'
  },
  email: {
    type: String,
  },
  created_date: {
    type: Date,
    default: Date.now
  }
  // status: {
  //   type: [{
  //     type: String,
  //     enum: ['pending', 'ongoing', 'completed']
  //   }],
  //   default: ['pending']
  // }
});

module.exports = mongoose.model('Accounts', TaskSchema);
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  owner: {
    type: String,
    required: 'Please input username!'
  },
  action: {
    type: String,
    required: 'Please input password!'
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

module.exports = mongoose.model('Logs', TaskSchema);
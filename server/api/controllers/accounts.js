'use strict';


var mongoose = require('mongoose'),
  Account = mongoose.model('Accounts');

// exports.list_all_acc = function (req, res) {
//   console.log('get list acc', req.body);
//   Account.find({}, function (err, acc) {
//     if (err)
//       res.send(err);
//     res.json(acc);
//   });
// };

exports.create_a_acc = function (req, res) {
  console.log('create a acc', req.body);
  var new_acc = new Account(req.body);
  new_acc.save(function (err, acc) {
    if (err)
      res.send(err);
    res.json(acc);
  });
};

exports.get_a_acc = function (req, res) {
  console.log('get a acc', req.body);
  Account.findById(req.params.accId, function (err, acc) {
    if (err)
      res.send(err);
    res.json(acc);
  });
};

exports.update_a_acc = function (req, res) {
  console.log('update a acc', req.body);
  Account.findOneAndUpdate({ _id: req.params.accId }, req.body, { new: true }, function (err, acc) {
    if (err)
      res.send(err);
    res.json(acc);
  });
};

exports.delete_a_acc = function (req, res) {
  console.log('delete a acc', req.body);
  Account.remove({
    _id: req.params.accId
  }, function (err, acc) {
    if (err)
      res.send(err);
    res.json({ message: 'Account successfully deleted' });
  });
};

exports.reset_accounts = function (req, res) {
  console.log('RESET TABLE', req.body);
  Account.remove({}, function (err, acc) {
    if (err)
      res.send(err);
    res.json({ message: 'Account successfully deleted' });
  });
};

exports.login_acc = function (req, res) {
  console.log('login', req.body);
  Account.findOne({user_name: req.body.user_name}, function (err, acc) {
    if (err) {
      res.json({ message: 'Dang nhap that baii' });
    }
    if (!acc) {
      res.status(404).send('Not found')
      return
    }
    if (acc && acc['password'] === req.body.password) {
      res.json({ message: 'Dang nhap thanh cong', code: 'abcxyz' });
    } else {
      res.json({ message: 'Dang nhap that bai', code: undefined });
    }
  });
};

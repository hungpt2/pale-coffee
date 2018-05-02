'use strict';
module.exports = function(app) {
  var template = require('../controllers/accounts');

  //IMPORTANT - TURN OF WHEN DEVELOP DONE
  //reset data
  // app.route('/reset/accounts')
  //   .delete(template.reset_accounts);

  // user
  app.route('/create-accounts')
    .post(template.create_a_acc);

  app.route('/account/:accId')
    .get(template.get_a_acc)
    .put(template.update_a_acc)
    .delete(template.delete_a_acc);

  //login
  app.route('/login')
    .post(template.login_acc);
};
var mongoose = require('mongoose');
var User = mongoose.model('User', {
  "_id": String,
"password": String
  // "encryptedPassword": String,
  // "authenticationTokens": {
  //   "token": String,
  //   "expirationDate": String},
  // "orders": String,
  //
  // "options": {
  //   "grind": String,
  //   "quantity": Number
  // },
  // "address": {
  //   "name": String,
  //   "address": String,
  //   "address2": String,
  //   "city": String,
  //   "state": String,
  //   "zipCode": Number,
  //   "deliveryDate": String
  //}

});

module.exports = User;

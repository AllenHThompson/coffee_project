

var info = request.body;
var token = info.authenticationTokens;
User.findOne({
  authenticationTokens: token
}, function (err, user) {
  if (!user) {
    response.json({
      "status": "fail",
      "message": "Users not authorized."
    });
    return;
  }

  module.exports = AuthToken;

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var User = require('./user');
var bcrypt = require('bcrypt');
app.use(bodyParser.json());
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/coffee');


var myPassword = 'Allenspassword';
var saltRounds = 10;


var coffeeChoices =
[
     "Extra coarse",
     "Coarse",
     "Medium-coarse",
     "Medium",
     "Medium-fine",
     "Fine",
     "Extra fine"
];




app.get('/options', function(request, response) {
     // sends a json response in the message body
     response.json(coffeeChoices);
});






app.post('/signup', function(request, response) {
     // reads in json format data from the request body
     var name = request.body.username;
     var password = request.body.password;
     console.log(request.body);
     //response.json(coffeeChoices);
     bcrypt.hash(password, saltRounds, function(err, encryptedPassword) {
          if (err) {
               console.error(err.message);
               return;
          }
          console.log('Password:', password);
          console.log('Encrypted password:', encryptedPassword);
          User.create({
               "_id": name,
               "password": encryptedPassword

          }, function (err, small) {
               if (err){
                    console.log(err);
                    var message = "fail"
                    else {
                         message = "ok"
                    }
               response.json({
                      "status": message,
                      "message": "Username is taken"
                 });
               }

          });

          response.json({ "status": message });
     });

});





app.listen(3000, function() {
     console.log('Listening on port 3000.');
});

var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var path = require('path')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../dist/week4')));

app.post("/api/login", function(req, res) {
    let users = [{'username':'lachydriver','birthdate':'27/2/99','age':'20','email':'lachydriver@gmail.com','password':'password'}]
    if (!req.body) {
      return res.sendStatus(400);
    }
    var customer = {};
    customer.email = req.body.email;
    customer.password = req.body.password;
    customer.valid = false;
    for (let i=0;i<users.length;i++){
        if (req.body.email == users[i].email && req.body.password == users[i].password){
            customer.valid = true;
            customer.username = users[i].username;
            customer.email = users[i].email;
            customer.birthdate = users[i].birthdate;
            customer.age = users[i].age;
        }
    }
    res.send(customer);
  });

  
let server = http.listen(3000, function() {
    let host = server.address().address
    let port = server.address().port
    console.log("Server running on " + host + ":" + port)
})
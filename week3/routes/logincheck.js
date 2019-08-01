module.exports = function(app, path) {
  app.post("/logincheck", function(req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    var customer = {};
    customer.email = req.body.email;
    customer.password = req.body.password;
    if (
      req.body.email == "lachydriver@gmail.com" &&
      req.body.password == "password"
    ) {
      customer.valid = true;
    } else {
      customer.valid = false;
    }
    res.send(customer);
  });
};

let userModel = require("../Models/user") 

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  userModel.findOne({
    username: req.body.name
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }

    // Email
    userModel.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }

      next();
    });
  });
};
const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    
  };
  
  module.exports = verifySignUp;
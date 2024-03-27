const userModel = require("../Models/UserModel"); 

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    // Vérification du nom d'utilisateur
    const userByName = await userModel.findOne({ username: req.body.name });
    if (userByName) {
      return res.status(400).send({ message: "Nom d'utilisateur déjà utilisé" });
    }

    // Vérification de l'email
    const userByEmail = await userModel.findOne({ email: req.body.email });
    if (userByEmail) {
      return res.status(400).send({ message: "Email déjà utilisé" });
    }

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;

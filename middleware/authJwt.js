require('dotenv').config()

const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
// const db = require("../Models");
// const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];
  
  if (token && token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
  }

  if (!token) {
    return res.status(403).send({ message: "Aucun token fourni!" });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
        return res.status(401).send({
        message: "Accès refusé!",
        error: err.message
        });
    }
        req.userId = decoded.userId;
        next();
    });
};

// isAdmin = (req, res, next) => {
//   User.findById(req.userId).exec((err, user) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }

//     Role.find(
//       {
//         _id: { $in: user.roles }
//       },
//       (err, roles) => {
//         if (err) {
//           res.status(500).send({ message: err });
//           return;
//         }

//         for (let i = 0; i < roles.length; i++) {
//           if (roles[i].name === "admin") {
//             next();
//             return;
//           }
//         }

//         res.status(403).send({ message: "Require Admin Role!" });
//         return;
//       }
//     );
//   });
// };

const authJwt = {
    verifyToken,
    // isAdmin,

};
  module.exports = authJwt;
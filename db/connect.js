const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://raparisonbryan:fV6p0BJ4rPrIx1Jv@appadvisor.uohjdvt.mongodb.net/appadvisor?retryWrites=true&w=majority&appName=Appadvisor", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `MongoDB Database Connected with Host: ${con.connection.host}`
      );
    })
    .catch((err) => {
      console.log("Connection Error => ", err.message);
      process.exit(1);
    });
};

module.exports = connectDatabase;

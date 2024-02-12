const express = require('express');
const connectDatabase = require('./db/connect'); // Chemin vers le fichier connect.js
const app = express();
const port = 3000;
const userRoutes = require("./Routers/userRouter");
const outilsRouter = require("./Routers/outilsRouter");

connectDatabase() ; 

app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.json());

/**
 * * Routes
 */
app.use("/user", userRoutes);
app.use("/outils", outilsRouter);

/**
 * * Exports
 */
module.exports = app;

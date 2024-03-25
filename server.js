const express = require('express');
const connectDatabase = require('./db/connect'); 
const app = express();
const port = 3000;
const userRouter = require("./Routers/userRouter");
const outilsRouter = require("./Routers/outilsRouter");
const avisRouter = require("./Routers/avisRouter");
const categoriesRouter = require("./Routers/categoriesRouter");

connectDatabase() ; 

app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.json()); 

app.use("/user" , userRouter);
app.use("/outils" , outilsRouter); 
app.use("/avis" , avisRouter); 
app.use("/categories" , categoriesRouter);

module.exports = app ; 

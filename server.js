const express = require('express');
const connectDatabase = require('./db/connect'); // Chemin vers le fichier connect.js
const app = express();
const port = 3000;
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
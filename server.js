const express = require('express');
const connectDatabase = require('./db/connect'); 
const app = express();
const port = 3000;
const userRouter = require("./Routers/userRouter");
const outilsRouter = require("./Routers/outilsRouter");
const avisRouter = require("./Routers/avisRouter");
const categoriesRouter = require("./Routers/categoriesRouter");
const cors = require('cors');
const swaggerDocs = require('./swagger');
const swaggerUI = require('swagger-ui-express');

connectDatabase() ; 

app.use(cors());

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
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = app ; 

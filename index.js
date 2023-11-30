const cors = require("cors");
const express = require("express");
const routerApi = require("./Routes");
const { errorHandler } = require("./Middlewares/error.handler");
const app = express();
const port ='3000'
app.set('PORT', port)

app.use(express.json());
app.use(cors());
app.use(express.static('public'));
require('./util/auth');

routerApi(app);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`My port ${port}.`)
});
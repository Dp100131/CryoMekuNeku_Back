const cors = require("cors");
const express = require("express");
const routerApi = require("./Routes");
const { errorHandler } = require("./Middlewares/error.handler");
const { config } = require('./config/config')
const app = express();
const port =config.port
app.set('PORT', port)

app.use(express.json());
app.use(cors());
app.use(express.static('public'));
require('./util/auth');

routerApi(app);

app.get('/hola', (req, res) => {
  res.send('Hello world');
})

app.use(errorHandler);

app.listen(port, () => {
  console.log(`My port ${port}.`)
});
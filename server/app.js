const app = require("express")();
const cors = require("cors")();
const _env = process.env;

const _API = require('./routers/api');

app.use(cors);
app.use('/', _API);

app.listen(_env.ENV_PORT,() => {console.log("http://localhost:" + _env.ENV_PORT)});
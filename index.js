const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

routes(app);

app.listen(3001);
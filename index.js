const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const companies = require("./companies.js");


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

companies(app);

app.listen(3001);
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const routes = require("./routes");

const app = express();
app.use(cors());
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles : true,
    tempFileDir : '/tmp/',
    debug: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
  
routes(app);

app.listen(3001);

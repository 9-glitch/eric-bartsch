const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

if(process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + "/dist"));
}

app.listen(process.env.PORT || 8081);
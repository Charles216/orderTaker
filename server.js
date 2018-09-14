// Define required packages & ports
//=========================================
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

// Define body-parser functionality
//=========================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import connection path to database
//=========================================
require("./config/connection.js");

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


"use strict";

const express = require("express");
const fs = require("fs");
const handleBars = require("express-handlebars");

//Require routers
const realm = require('./routes/realm');

//Create app instance
let app = express();


app.engine('handlebars', handleBars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', realm);

//Initialize port
let port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Server started!");
});

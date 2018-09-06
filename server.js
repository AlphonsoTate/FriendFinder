var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8000;


  

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


 
  

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
  });


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
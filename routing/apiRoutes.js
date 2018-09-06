var express = require("express");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8000;


  

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  

  

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

 app.post("/app/data/friends", function(req, res) {
     return res.json(friends);
  });

  // Create New Characters - takes in JSON input
app.post("/app/data/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newfriend = req.body;
  
    console.log(newfriend);
  
    // We then add the json the user sent to the character array
    friends.push(newfriend);
  
    // We then display the JSON to the users
    res.json(newfriend);
  });
  
  // Starts the server to begin listening


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
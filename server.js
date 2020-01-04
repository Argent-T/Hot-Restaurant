
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [{
    name: "tom",
    phoneNumber: "000-000-0000",
    email: "test@email.com",
    id: "12345"
}];
var waitlist = [{
    name: "bob",
    phoneNumber: "111-111-1111",
    email: "test1@email.com",
    id: "11111"
}];

// routing

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });


app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTables = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTables.routeName = newTables.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTables);

  if (tables.length<6){
    tables.push(newTables);
  } else {
      waitlist.push(newTables);
      alert ("you been added to the waiting list")
  }
    
  
    res.json(newTables);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

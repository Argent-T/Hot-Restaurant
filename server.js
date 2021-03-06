
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

var tables = [];

var waitlist = [];

// routing

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function (req, res) {
  return res.json(tables);
});
app.get("/api/waitlist", function (req, res) {
  return res.json(waitlist);
});
app.get("/api/clear", function (req, res) {
  tables = [];
  res.redirect("/tables");
});


app.post("/api/tables", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newResevration = req.body;
  console.log(newResevration);
  console.log(tables);
  if (tables.length === 5) {
    waitlist.push(newResevration)
    console.log("added to waitlist")
  }
  else {
    tables.push(newResevration);
    console.log("added to tables")
  }

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newResevration.routeName = newResevration.name.replace(/\s+/g, "").toLowerCase();

  console.log(newResevration);



  res.json(newResevration);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

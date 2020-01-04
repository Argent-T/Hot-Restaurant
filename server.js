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
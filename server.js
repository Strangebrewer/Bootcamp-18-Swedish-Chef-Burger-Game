var express = require("express");
var bodyParser = require("body-parser");

// Set Handlebars.
var exphbs = require("express-handlebars");

// Import routes...
var routes = require("./controllers/burger_controller.js");

//  Set the port to whatever is assigned by Heroku, and if that's false, then set it to 3000.
var PORT = process.env.PORT || 3000;
var app = express();

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//  Give the server access to the routes imported above.
app.use(routes);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

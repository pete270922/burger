var express = require("express()");
var bodyParser = require("body-Parser()");

var app = express;
var PORT = process.env.PORT|| 8080;

var db = require("../models");

app.use(bodyParser.urlcoded({extended = true}));

app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql"); 

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "pete",
  password: "1234",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Express and MySQL code should go here.
app.get("/quotes", function(req, res) {
  connection.query("SELECT * FROM quotes;", function(err, data) {  
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { quotes: data });
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});









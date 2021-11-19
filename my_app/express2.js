var express = require("express");
var http = require("http");
var app = express();
app.get("/", function(req, res, next) {
res.send("Hello <strong>home page</strong>");
});
app.get("/foo", function(req, res, next) {
res.send("Hello <strong>foo</strong>");
});
app.get("/bar", function(req, res, next) {
res.send("Hello <strong>bar</strong>");
});
//app is passed to the http.createServer() method
//http.createServer(app).listen(8000);

app.listen(3000,()=> {

    console.log("App is listing on http://localhost:3000")
})
var express = require("express");
server = express();

server.use(express.static('fontpage'));


server.get("/", function(req, res){
  res.send("Hello World!");
});

server.get("/md2020", function(req, res){
    res.send("Hello MD2020!");
});

server.get("*", function(req, res){
    res.send("Page not found",404);
})

server.listen(8080);
console.log("Server running on port: 8080")

//run: node server.js

//browser: http://localhost:8080
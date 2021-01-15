var express = require("express");
server = express();

server.use(express.static('fontpage'));


server.get("/", function(req, res){
  res.send("Hello World!");
});

server.post("/add",function(req,res){
  var form = formidable.IncomingForm();
  form.maxFileSize =  200*1024; 
  form.parse(req, function(err, fields, files){
   if(err){
     console.log("File size too large!");
     res.render("error", {error:err.message ,next:"javascript:history.back()"})
     //res.redirect("")
   }else{
    var gotFields = fields;
    var fileExt = files.poster.name.split(".")[1];
    gotFields.poster = gotFields.id + "."+fileExt;
    var posterPath = "網頁作業/userpic"+gotFields.poster;
    fs.renameSync(files.poster.path, posterPath);
    //check image size
    sizeOf(posterPath,function(err, dim){
      if(err){
        res.render("error", {error:"Cannot read uploaded image file.", next:"javascript:history.back()"});
      }else{
           //record to database, nedb, mongodb
           res.render("game", {id: gotFields.id});        
      }
    })
   }
  })
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
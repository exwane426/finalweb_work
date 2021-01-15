var express = require("express");
server = express();

server.use(express.static('fontpage'));


server.get("/", function(req, res){
  res.send("Hello World!");
});

window.onload=function(){
    //等到文字載入完成後再載入js程式碼
    var display_area = document.getElementById("display_area");
    //獲取id為display_area的節點賦值給display_area.
    var btn = document.getElementById("btn");
    //獲取id為btn的節點賦值給btn.
    btn.onclick = function(){
    //點選btn執行程式碼塊裡面的程式碼
    var content_val = document.getElementById("content").value;
    //獲取id為content節點的值賦值給content_val.
    display_area.append(content_val);
    //把content_val新增到節點display_area裡面
    };
}

server.listen(8080);
console.log("Server running on port: 8080")
let express = require("express");

let app = express();

let path = require("path");

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/table.html"))
})


app.get("/table",(req,res)=>{
    var num = req.query.num;
    var str = " ";
    for(let i = 1; i<=10;i++){
        str+= num + " x " + i + " = " + (num*i) + "<br>"
    }
    res.write(str);
    res.end();
})

app.listen(3000);
let express = require("express")

let app = express();

app.get("/", function(req, res){
   let str = "<h1>Welcome to first page</h1>";
   let d1 = new Date();
   str+="today is "+ d1.toString();

   res.send(str)
})



app.listen(3000,()=> {

    console.log("App is listing on http://localhost:3000")
})
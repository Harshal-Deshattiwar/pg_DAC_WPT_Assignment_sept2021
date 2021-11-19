let express = require("express");



let app = express();

var path = require("path");

// app.use(express.urlencoded({
//     extended: true
//   }))

app.get("/",function(req,res){
    // res.send(__dirname)
    res.sendFile(path.join(__dirname+"/GetForm.html")); 
})

app.get("/showdata",(req,res)=>{
    var first = req.query.first;
    var second = req.query.second;
    var third = req.query.third;

    var str ="The parameters are" +"<br> <ul> <li>"+ first +"</li>"
    str += "<li>"+second+"</li><li>"+third+"</li>"
    res.send(str);

})

app.listen(3000,()=> {

    console.log("App is listing on http://localhost:3001");
})
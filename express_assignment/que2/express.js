var express = require("express");
 let app = express();

 let path = require("path");




 app.get("/",(req,res)=>{
     res.sendFile(path.join(__dirname+"/simple.html"))
 })


app.get("/getdata",(req,res)=>{
    let pAmt = req.query.p_amt;
    let year =req.query.no_year;
    let rate = req.query.roi
    let result= (pAmt*year*rate/100).toString();
    res.write(result);
    res.end();
    
})



 app.listen(3000,()=>{
    console.log("running at 3000")
 })
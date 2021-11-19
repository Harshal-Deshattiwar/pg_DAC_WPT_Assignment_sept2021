let express=require("express");
let fs= require("fs");
let app=express();
let path=require("path")

app.get("/",function(req,res){
    
    res.sendFile(path.join(__dirname + '/order.html'))
})

app.get("/submitdata",function(req,res){

    var file = (req.query.ID + "|" +req.query.name +"|" + req.query.bill+ "|" +req.query.ship+ "|" +req.query.total )
    
   var data= ("OrderId | CustomerName | BillingDate | ShippingDate | Ordertotal"+"\n")

    fs.writeFile("order_1.txt",data,function(err){
        if(err)
        console.error("Error Occured")
        else
        console.log("names succefully entered")
    
    })
    fs.appendFile("order_1.txt",file,function(err){
        if(err)
        console.error("Error Occured")
        else
        console.log("names succefully entered")
    
    })
    
    

})

app.listen(3000)

//submitdata?ID=1&name=Omkar+Gawade&bill=2021-11-04&ship=2021-11-07&total=100&submit=Submit
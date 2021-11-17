
var file = require("fs");

file.readFile("customer.json",(err,data)=>{
    var details = JSON.parse(data.toString());
    details.forEach(customer =>{
        console.log(customer.name+ " : " + customer.phone);
    });
})
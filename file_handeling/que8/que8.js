var file = require("fs");

file.readFile("emp.txt",(err,data)=>{

    if(err){
        return;
    }

    var data_emp = data.toString().split("\n");
    var sum = 0;
    data_emp.forEach((emp,i)=>{
        sum += parseInt(emp.split(":")[3]);
    })

    console.log("Total salary: " + sum);
})
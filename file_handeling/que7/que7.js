var file = require("fs");

var names = ["John","Jack","Jerry","Julius"];
var str = names.join("|");

file.writeFile("name.txt", (str),(err)=>{

   return;
    
})


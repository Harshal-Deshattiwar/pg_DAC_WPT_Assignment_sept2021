var obj = require("./mymodule");

var num = 7;

console.log("Factorial of "+ num + " is "+obj.factorial(num))
console.log("")
console.log(num+obj.myprime(num));
console.log("")
console.log("Table of "+num +" :")
console.log(obj.printTable(num));

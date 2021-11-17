
var calc = require("./calc.js")

var a=5,b=4,c=8

console.log("Addition of " + a +" and "+ b + " is " + calc.add(a,b));
console.log("Subtraction of " + a +" and "+ b + " is " + calc.subtract(a,b));
console.log("Multiplication of " + a +" and "+ b + " is " + calc.mul(a,b));
console.log("Division of " + a +" and "+ b + " is " + calc.div(a,b));
console.log("Square of " + a + " is " + calc.sqa(a));
console.log("sum: "+ calc.sum(a,b,c));
console.log("Minimum of " + a +", "+ b +" and "+ c + " is " + calc.min(a,b,c));
console.log("Maximum of " + a +", "+ b +" and "+ c + " is " + calc.max(a,b,c));
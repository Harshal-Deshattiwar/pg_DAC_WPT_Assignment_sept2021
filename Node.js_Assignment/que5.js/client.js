
var circle = require("./circle");
var rectangle = require("./rectangle");
var triangle = require("./triangle");

console.log("Circle: ")
console.log(circle.calcArea(3).toFixed(2));
console.log(circle.calcCircumference(3).toFixed(2));
console.log(circle.calcDiameter(3).toFixed(2));

var l=5, b=4;
console.log();
console.log("Rectangle:");
console.log(rectangle.calcArea(l,b));
console.log(rectangle.calcPerimeter(l,b));

var s1=2, s2=4,s3=5;
console.log();
console.log("Triangle:");
console.log(triangle.isEquilateral(s1,s2,s3));
console.log(triangle.calcPerimeter(s1,s2,s3));
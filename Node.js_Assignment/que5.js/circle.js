
var calcArea = function(radius){
    return Math.PI * radius * radius;
}

var calcCircumference = function(radius){
    return Math.PI * 2* radius;
}

var calcDiameter = function(radius){
    return radius * 2;
}

module.exports = {calcArea,calcCircumference,calcDiameter};
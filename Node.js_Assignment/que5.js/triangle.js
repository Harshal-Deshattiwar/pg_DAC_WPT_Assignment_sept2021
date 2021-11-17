var isEquilateral=function (side1,side2,side3){
    return (side1==side2 && side1==side3);
}

var calcPerimeter=function (side1,side2,side3){
    return side1+side2+side3;
}

module.exports = {isEquilateral,calcPerimeter};
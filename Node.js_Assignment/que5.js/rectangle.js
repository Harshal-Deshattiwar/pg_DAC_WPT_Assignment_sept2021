var calcArea=function (length,breadth){
    return length*breadth;
}

var calcPerimeter=function(length,breadth){
    return 2*(Number(length)+Number(breadth));
}

module.exports = {calcArea,calcPerimeter};
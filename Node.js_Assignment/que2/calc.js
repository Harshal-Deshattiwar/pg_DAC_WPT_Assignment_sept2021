var add = function(a,b){
    return (a+b);
}

var subtract=function(a,b){
    return (a-b);
}

var mul= function (a,b){
    return a*b;
}

var div = function (a,b){
    return (a/b).toFixed(2);
}

var sqa= function(a){
    return (a*a);
}


var sum=function sum(){
    var sum=0;
    for (i=0; i<arguments.length; i++){
        sum+= arguments[i];
    }
    return sum;
}

var min=function(a,b,c){
    return (Math.min(a,b,c));
}

var max=function(a,b,c){
    return (Math.max(a,b,c));
}

module.exports = {add,subtract,mul,div,sum,min,max,sqa};
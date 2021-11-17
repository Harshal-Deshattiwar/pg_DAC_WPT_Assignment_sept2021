
var factorial=function(num){
    var fact=1;
    for(let i= 1;i<=num;i++){
        fact *= i;
    }
    return fact;
    
}

var myprime = function(num){
    for(var i=2;i<=(num/2);i++){
        if(num % i == 0 ){
            //console.log("Not a prime number");
            return " is Not a prime number";
        }

    }
   return (" is a prime number");
}

var printTable= function(num){
    var table = "";
    for(var i =1; i <= 10; i++ ){
        table += (num + " x " + i + " = " + (num* i ) + "\n");
    }
    return table;
}

module.exports={factorial,myprime,printTable};
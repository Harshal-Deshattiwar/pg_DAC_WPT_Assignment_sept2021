
let stocks = {
    fruits : ["straberryes","grapes","banana","apples"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};




let order = function(fruit_name,call_production){

   setTimeout(function(){
       console.log(`${stocks.fruits[fruit_name]} was selected`);

       call_production();
   }, 2000);
    
};

let production = function(){
    setTimeout(function(){
        console.log(`production has started`)
        setTimeout(() => {
            console.log("fruit has been chopped");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {
                    console.log("the machine was started ");

                    setTimeout(() => {
                        console.log(`Container ${stocks.holder[0]} selected`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as topping`);

                            setTimeout( ()=>{
                                console.log("Ice-creame is served");
                            },2000);
                        },3000);
                    },2000);
                },1000);
            }, 1000);
        }, 2000);
    },0000);
};

order(0,production);
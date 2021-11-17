let stocks = {
    fruits : ["straberryes","grapes","banana","apples"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};


let is_shop_open = true;

let order = ((time, work) =>{

    return new Promise( (resolve, reject) =>{
        if(is_shop_open){

            setTimeout(() =>{

                resolve(work());
            }, time );
            
        }
        else{
            reject(console.log("our shop is closed"));
        }

    });
});

order(2000, () => console.log(`${stocks.fruits[0]} was selected`))

.then(()=>{

    return order(0000, ()=> console.log("production has started"));
})


.then(()=> {

    return order(2000, ()=> console.log("fruit was chopped"));
})


.then(()=> {
    return order(1000, ()=> {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
    });
})

.then(()=> {
    return order(1000, ()=>console.log("start the machime"));
})

.then(()=> {
    return order(2000, ()=> {console.log(`Holder ${stocks.holder[0]} was selected`);})
})

.then(()=>{
    return order(3000, ()=> console.log(`Topping ${stocks.toppings[0]} was selected`));
})

.then(()=> {
    return order(1000, ()=> console.log("Ice creame was served"));
})

.catch(()=> {
    console.log("Coustomer left");
})

.finally(()=>{
    console.log("day ended, shop is closed")
})
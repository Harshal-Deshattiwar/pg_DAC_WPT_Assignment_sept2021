
exports.greet=function (){
    const d = new Date();
    let hour = d.getHours();
    if (0< hour && hour < 12 ) {
        console.log("Good Morning");
    }
    else if (12<hour && hour<18) {
        console.log("Good Afternoon");
    } else {
        console.log("Good Evening");
    }
}
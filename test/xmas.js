function sayHello(){
    let d = new Date();
    // console.log((d.getMonth()+1) + ":" + d.getDate());
    if((d.getMonth()+1) === 12 && d.getDate() === 25){
        console.log("Merry Christmas!");
        return "Merry Xmas!";
    } else {

        console.log("Hello World!"); return "Today is not Xmas"; }
    
}

sayHello();

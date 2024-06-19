//global variable
let name="ram"
let age=12
let number=20

function doSomething(){
    let number = 1111
    var age = 33 // since we havent use let keyword, it updates the above global age variable
    console.log("number inside", number)
}


let willRain=false
let hasProb=true

if (willRain){
    console.log("take umbrella")
}
else{
    if(hasProb){
        console.log("take umbrella")
    }
    console.log("no need")
}


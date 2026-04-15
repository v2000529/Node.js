const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("enter the number ", (num) => {
    if(num%2==0){
        console.log(num + " is even number");
    }
    else{
        console.log(num + " is a odd number");
    }
});
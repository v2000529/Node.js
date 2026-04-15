const readline = require('readline');
const rl = readline.createInterface ({
    input:process.stdin,
    output:process.stdout
});

rl.question("enter  first number ", (n1) => {
    rl.question("enter second number ", (n2) => {
        console.log("sum is " + (Number(n1)+Number(n2)));
        rl.close();
    });
});
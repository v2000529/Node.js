const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("enter yout name ", (name) => {
    console.log("Hello " + name);
    rl.close();
});
rl.on('close', () => {
    console.log("Interface closed");
    process.exit(0)
});
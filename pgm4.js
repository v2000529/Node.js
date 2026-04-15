const http = require('http');
const server = http.createServer((req,res) => {
    res.write("welcome to http server");
    res.end();
});

server.listen(3000, () => {
    console.log("server is running port 3000");
});
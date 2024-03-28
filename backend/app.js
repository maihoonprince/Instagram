const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log("Server Created");
    res.end("it is Working")
})

server.listen(5000, "localhost", ()=>{
    console.log("Server is Running on Port 5000");
})
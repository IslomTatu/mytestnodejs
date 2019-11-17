// import http from 'http'
const http = require("http")
const fs = require('fs')
// ************************************************
// readStream.on('data', (chunk) => {
    //     console.log("new chunk recieved");
    //     writeStream.write(chunk)
    // });
    
    // readStream.pipe(writeStream);
// ************************************************

// ************************************************
// const server = http.createServer((req, res) => {
//     console.log(`running on this ${req.url} server`)
//     const readStream = fs.createReadStream(__dirname+"/read.txt");
//     res.writeHead(200, {"Content-Type": "html"});
//     readStream.pipe(res)
// });
// ************************************************

const server = http.createServer((req,res) => {
    console.log(`running on this ${req.url} server`)
    res.writeHead(404, {"Content-Type": "application/json"})
    const obj = {
        name: "Vali",
        job: "designer",
        age: 25
    }
    res.end(JSON.stringify(obj))
})

server.listen(3000, '127.0.0.1');

console.log('running on 127.0.0.1:3000 port');

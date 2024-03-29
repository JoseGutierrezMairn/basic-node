const fs = require('fs');
const server = require('http').createServer();

const starterDate = new Date();

server.on('request', (req, res) => {
    //Solution 1
    // fs.readFile('test-file.txt', (err, data) => {
    //     if (err) { console.log(err); }
    //     res.end(data);
    //     console.log(Date.now() - starterDate);
    // });

    //Solution 2: streams
    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', chunk => {
    //     res.write(chunk);

    // });

    // readable.on('end', () => {
    //     res.end();
    // });

    // readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('File not Found');
    // })

    //Solution 3
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);

});


server.listen(8080, '127.0.0.1', () => {
    console.log('Server is running in port 8080...');
})
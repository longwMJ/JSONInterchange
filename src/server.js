const http = require('http');

http.createServer(function(req, res) {
    res.write('wwwwwwwww');
    res.end();
}).listen(4000);


// 运行: node server.js
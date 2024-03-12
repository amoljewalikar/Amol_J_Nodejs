const http = require('http');
http.createServer(function(req, res){
    res.write("Hello from Amol...");
    res.end();
}).listen(8082)
const httpServer = require("http")


let count = 1

httpServer.createServer(function(request, response){
    response.end("Hello http: " + (count++))
}).listen(3000)

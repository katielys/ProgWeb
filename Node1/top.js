const fs = require('fs');

var http = require('http');
path = "./prova01"
var lista;

fs.readdir(path, function(err, items) {
    lista = items;
});

var server = http.createServer(function(req,res){
   
   
    lista.forEach(element => {
        res.write(element+"\n")
    });

    res.end();
});

server.listen(3000);




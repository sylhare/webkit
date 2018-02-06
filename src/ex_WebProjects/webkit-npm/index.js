var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page); // for log in the server

    res.writeHead(200, {
        "Content-Type": "text/html"
    }); // Saying 200 it's ok the page exist

    if (page == '/') {
        res.write('<!DOCTYPE html>' +
            '<html>' +
            ' <head>' +
            ' <meta charset="utf-8" />' +
            ' <title>My Node.js page!</title>' +
            ' </head>' +
            ' <body>' +
            ' <h1> Hello World </h1>' +
            ' <p>Here is a paragraph of <strong>HTML</strong>!</p>' +
            ' </body>' +
            '</html>');
        res.end();
    } else if (page == '/index') {
        res.write('You\'re in the index page, there is nothing to see');
    } else if (page == '/super/secret') {
        res.write('Hey, this is a private area!');
    }
});

server.listen(3000); // will be on localhost:3000

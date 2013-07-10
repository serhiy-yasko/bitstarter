var express = require('express');
var fs = require('fs');
var buffer = new Buffer(256);

var app = express.createServer(express.logger());

var text = fs.readFileSync('index.html', function(err, data) {
    if (err) throw err;
    buffer.write(data, "utf-8");
});

app.get('/', function(request, response) {
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

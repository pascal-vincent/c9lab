var express = require('express'),
    app = express(),
    path = require('path');

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT, function () {
  console.log('Test app started!');
});

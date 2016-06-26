var express = require("express");
var app = express();

app.enable('trust proxy');

app.get('/api/whoami', function(req, res) {
    
    console.log("Got a request for whoami");
    
    var response = {
        "ipaddress" : req.ip,
        "language" : req.headers["accept-language"],
        "software" : req.headers['user-agent']
    };
    res.send(JSON.stringify(response));
});

app.listen(process.env.PORT, process.env.IP);
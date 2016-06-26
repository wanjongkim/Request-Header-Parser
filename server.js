var express = require("express");
var app = express();

app.enable('trust proxy');

app.use(express.static('client'));
app.get('/api/whoami', function(req, res) {
    
    console.log("Got a request for whoami");
    res.setHeader('Content-Type', 'application/json');
    var response = {
        "ipaddress" : req.ip,
        "language" : req.headers["accept-language"],
        "software" : req.headers['user-agent']
    };
    res.send(JSON.stringify(response));
});

app.listen(process.env.PORT, process.env.IP);
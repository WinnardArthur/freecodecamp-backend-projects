const express = require('express');
const Port = 3000;
const app = express();
const os = require('os');



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.post("/api/whomai", (req, res) => {
    let ipaddress = req.socket.remoteAddress;
    let language = req.headers['accept-language'];
    let software = req.headers['user-agent'];c

    res.json({ipaddress, language, software})
})

app.listen(Port, () => console.log('Server running...'))
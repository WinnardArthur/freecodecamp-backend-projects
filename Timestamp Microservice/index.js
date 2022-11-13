const express = require('express');
const Port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.post('/api', (req, res) => {
    const date = req.body.date;
    const msDate = req.body.msDate;

    res.json(req.body)
})

app.get("/api/:date", (req, res) => {
    let unixTime;
    let utcTime;

    if (req.params.date.includes("-", "/")) {
        console.log(1)
        utcTime = new Date(req.params.date).toUTCString()
        unixTime = new Date(req.params.date).getTime()
    } else if (isNaN(req.params.date) === false) {
        console.log(2)
        utcTime = new Date(Number(req.params.date)).toUTCString()
        unixTime = req.params.date
    } else {
        console.log(3)
        res.json({error: "Invalid Date"})
    }
    
    res.json({unix: unixTime, utc: utcTime})
})

app.listen(Port, () => {
    console.log('Server is running')
})
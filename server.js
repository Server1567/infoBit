const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'views/build')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/build', 'index.html'))
})

// Port Listener
var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('---------- LOCALHOST:8080 ---------')
    console.log('------- INFOBIT APP RUNNING -------')
})

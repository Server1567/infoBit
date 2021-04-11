const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')

// middlewares
app.use(express.static(path.join(__dirname, 'views/build')))
app.use(express.json())

// What will happen when the '/' path is requested
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/build', 'index.html'))
})

// What will happen when the '/info-trending' path is requested
app.post('/info-trending', function (req, res, next) {
    try {
        // Validate if the client isn't sending data.
        if (Object.entries(req.body).length === 0) {
            return res.status(400).json({ message: "There are not data" })
        }

        let symbol = req.body.sym
        // Request data from the API
        axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${symbol}`, {
            headers: {
                'X-CMC_PRO_API_KEY': 'dca0b296-abb2-482f-887e-2f0757bc3767',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true'
            }
        })
        .then(resp => {
            let info = eval(`resp.data.data.${symbol}.description`)
            let url = eval(`resp.data.data.${symbol}.urls.website[0]`)

            return res.status(200).json({ message: info, url: url })
        })
        .catch(err => {
            return res.status(404).json({ message: "Something has get out wrong", error: err })
        })
    } catch (e) {
        console.error('Something has wrong with About Component')
        console.error(e.message)
        console.error('')
        console.error(e)

        return res.status(404).json({ message: "Error when consuming the API. Error 404", error: e })
    }
})

// Port Listener
var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('---------- LOCALHOST:8080 ---------')
    console.log('------- INFOBIT APP RUNNING -------')
})

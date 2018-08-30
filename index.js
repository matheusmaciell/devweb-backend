const express = require('express')
const app = express()

//app.get('/', (req, res) => res.send('hi'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get ('/', function (req, res){
    res.send('Hi, oi, hola')
})

app.post ('/', function (req, res) {
    res.send('Got a POST request')
})

app.put ('/', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete ('/', function (req, res) {
    res.send('Got a DELETE request at /user')
})

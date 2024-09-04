const express = require('express')
const server = express()
server.use(express.json())
server.get('/hello', (req, res) => {
    res.json('hello, there')
})
const Port = process.env.PORT || 9000
server.listen(Port, () => {
    console.log(`listening on port ${Port}`)
})

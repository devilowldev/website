require('dotenv/config')
const http = require('http')
const app = require('./app')

const port = process.env.PORT || 3000

const server = http.createServer(app)

// eslint-disable-next-line no-var
var listener = server.listen(port, function () {
    console.log(`Your app is listening on port ${listener.address().port}`)
})

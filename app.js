const express = require('express')
const path = require('path')
// const router = express.Router()

const app = express()
const router = express.Router()

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/project', router.get('/'), (req, res) => {
    res.render('project')
})

module.exports = app

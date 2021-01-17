const express = require('express')
const path = require('path')

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

app.use('/chat', router.get('/'), (req, res) => {
    res.render('chat')
})

app.get('*', (req, res) => {
  res.render('404');
})

module.exports = app

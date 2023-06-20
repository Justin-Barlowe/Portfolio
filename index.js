//Imports

const express = require('express')
const app = express()
const port = 3000

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))

//Set Views
app.set('views', './views')
app.set('view engine', 'ejs')


app.get('', (req,res) => {
    res.render('index')
})

app.get('/about', (req,res) => {
    res.render('about')
})

app.get('/projects', (req,res) => {
    res.render('projects')
})

app.get('/database', (req,res) => {
    res.render('database')
})

app.get('/apitests', (req,res) => {
    res.render('apitests')
})

app.get('/resume', (req,res) => {
    res.render('resume')
})

//Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))
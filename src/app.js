const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
    //const request = require('request')
const port = process.env.PORT || 3000
const index_path = path.join(__dirname, '../public')
const template_path = path.join(__dirname, '../template/views')
const partial_path = path.join(__dirname, '../template/partials')

app.set('view engine', 'hbs')
app.set('views', template_path)
hbs.registerPartials(partial_path)

app.use(express.static(index_path))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    })
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send("provide address")
    }


    geocode(req.query.address, (error, geodata) => {
        if (error) {
            return res.send(error)
        }
        forecast(geodata, (error, foredata) => {
            if (error) {
                return res.send(error)
            }
            res.send(foredata)
        })
    })
})

app.listen(port, () => {
    console.log('server is upat port 3000')
})
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


console.log(process.argv[2])

geocode("delhi", (error, data) => {
    console.log(error)
    forecast(data, (error, data) => {
        console.log(data)
    })

})
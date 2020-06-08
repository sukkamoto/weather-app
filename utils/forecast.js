const request = require('request')

const forecast = (data, callback) => {
    const url = 'https://api.darksky.net/forecast/2b5cb900be0aa06d0689dde4f3d060b2/' + data.latitude + ',' + data.longitude + '?units=si'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, "temperature is " + response.body.currently.temperature)
        }

    })
}

/*const url = 'https://api.darksky.net/forecast/2b5cb900be0aa06d0689dde4f3d060b2/37.8267,-122.4233'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            console.log('Unable to connect')
        } else if (response.body.error) {
            console.log(response.body.error)
        } else {
            console.log("it is currently" + response.body.currently.temperature)
        }
    })*/

module.exports = forecast;
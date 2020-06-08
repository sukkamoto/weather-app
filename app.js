const request = require('request')
const url = 'https://api.darksky.net/forecast/2b5cb900be0aa06d0689dde4f3d060b2/37.8267,-122.4233'
request({ url: url }, (error, response) => {
    const jdata = JSON.parse(response.body)
    console.log(jdata)

})
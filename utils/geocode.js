const request = require('request')


const geocode = (address, callback) => {
    const url1 = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoic2hiY2hsaiIsImEiOiJja2I2ZjI4ZDgwNXdqMnRtbndtNnZpYmZpIn0.uYYMkOatv0zntM29y26ZLQ"
    request({ url: url1, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location', undefined)
        } else {
            const data = {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                name: response.body.features[0].place_name

            }
            callback(undefined, data)
        }

    })
}

module.exports = geocode;
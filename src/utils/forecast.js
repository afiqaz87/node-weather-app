const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/1deccdd69ff1b7105e03d15894952737/" +
    latitude +
    "," +
    longitude +
    "?units=si"

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,
                { 
        forcastMessage: body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.' ,
        status: body.currently.icon    
                } )
        }
    })
}

module.exports = forecast
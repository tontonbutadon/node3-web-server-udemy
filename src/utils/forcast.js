const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=460e7d3ab001d5af2e56186ff93cc6b8&query=37.8267,-122.4233&units=f'
// request({url: url, json:true}, (error, response) => {
//     //console.log(response.body.current)
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }else if(response.body.error){
//         console.log('Unable to find location')
//     }else{
//         console.log("temperature " + response.body.current.temperature)
//         console.log("feels like  " + response.body.current.feelslike)
//     }
// })

const foreCast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=460e7d3ab001d5af2e56186ff93cc6b8&query='+ latitude +',' + longitude + '&units=f'
    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!')
        }else if(body.error){
            callback('Unable to find location!')
        }else{
            callback(undefined, {
                temperature: body.current.temperature,
                feelslike: body.current.feelslike
            }) 
        }
    })

}

module.exports = foreCast
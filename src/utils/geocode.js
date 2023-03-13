const request = require('request')

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoidG9udG9uYnV0YWRvbiIsImEiOiJjbGVuZWxmeWowNGhnM3lvNDlkeTluYWl3In0.Wgyx5PXifBj7kjJraZOa3Q&limit=1'
// request({url: geocodeURL, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect 2 services')
//     }else if(response.body.features.length == 0){
//         console.log('Unable to find latitude and longitude')
//     }else{
//         console.log('Latitude ' + response.body.features[0].center[1])
//         console.log('Longitude ' + response.body.features[0].center[0])
//     }
// })

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoidG9udG9uYnV0YWRvbiIsImEiOiJjbGVuZWxmeWowNGhnM3lvNDlkeTluYWl3In0.Wgyx5PXifBj7kjJraZOa3Q'
    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(body.features.length == 0){
            callback('Unable to find location. Try another search!', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode
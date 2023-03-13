console.log('Client side javascript file is loaded')
/*
fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) => {
    console.log(data)
  })  
})
*/

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    console.log(location)
    const searchUrl = 'http://localhost:3000/weather?search=address&address=' + location
    messageOne.textContent = 'Loading ... '
    messageTwo.textContent = ''
    fetch(searchUrl).then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
            messageOne.textContent = data.error
        }else{
            messageOne.textContent = 'You searched ' + data.location + '.'
            messageTwo.textContent = 'The temperature will be ' + data.forecast.temperature + '. You feel like ' + data.forecast.feelslike + ' degrees.'
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})
})
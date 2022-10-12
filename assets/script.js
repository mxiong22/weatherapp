// API OPENWEATHER KEY 6b802d574a5f651d0153c31018013cd3

var input= document.getElementById ("cityname")
var citybtn=document.getElementById ("citybtn")

citybtn.addEventListener("click", function (event){

    event.preventDefault()
console.log(input.value)
fetchLocation (input.value)
})


function fetchLocation (city) {
    var url =`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=6b802d574a5f651d0153c31018013cd3
    `
    fetch(url)
    .then (function(res){
        return res.json()

    })
    .then (function(data){
    
    var lat= data[0].lat
    var lon= data[0].lon
    getCurrentWeather (lat, lon)
    })
}

// API "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"

function getCurrentWeather(lat,lon) {
    var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=6b802d574a5f651d0153c31018013cd3`

    fetch(url)
    .then (function(res){
        return res.json()

    })
    .then (function(data){
    
   console.log(data)
    })

}

function getCurrentWeather(lat,lon) {
    var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=6b802d574a5f651d0153c31018013cd3`

    fetch(url)
    .then (function(res){
        return res.json()

    })
    .then (function(data){
    
   console.log(data)
    })

}

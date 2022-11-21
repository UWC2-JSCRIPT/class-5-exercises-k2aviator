// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

weatherId = document.getElementById("weather-head")

//OR

weatherQuery = document.querySelector('#weather-head')

weatherQuery.innerText = "February 10 Weather Forecast, Seattle"


// Change the styling of every element with class "sun" to set the color to "orange"

const sunnyDays = document.querySelectorAll('.sun')

//sunnyDays.style.color = "orange";

sunnyDays.forEach(item => {
    item.style.color = "orange";
})
        
// Change the class of the second <li> from to "sun" to "cloudy"

secondLi = document.querySelector('.sun')
secondLi.className = "cloudy"
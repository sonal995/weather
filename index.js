var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#submit'); // Changed to match HTML id
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description'); // Fixed variable name
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind'); // Fixed selector

const apik = "63a90ae96d390ec37d6c1252f5a86e1a"; // Added `const` keyword

function conversion(val) {
    return (val - 273.15).toFixed(2); // Corrected to use Kelvin to Celsius conversion
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${conversion(temperature)}°C</span>`;
            description.innerHTML = `Sky conditions: <span>${descrip}</span>`;
            wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`;
        })
        .catch(err => alert('You entered a wrong city name'));
});

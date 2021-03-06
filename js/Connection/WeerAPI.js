function weatherBalloon( cityID ) {
    var key = '00018a88ae198810a68489bb05cf2cf2';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {drawWeather(data);}) // Call drawWeather
    .catch(function() {});     // catch any errors
}
    window.onload = function() {
        weatherBalloon( 2750053 );
            }

            function drawWeather( d ) {
                var celcius = Math.round(parseFloat(d.main.temp)-273.15);
                var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
                
                document.getElementById('description').innerHTML = d.weather[0].description;
                document.getElementById('temp').innerHTML = celcius + '&deg;';
                document.getElementById('location').innerHTML = d.name;
            }




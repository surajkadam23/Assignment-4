document.getElementById('checkWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('citySelect').value;
    const apikey = 'e13ff11bbd8faafdbe4edc259dad1237'; 
    const weatherResult = document.getElementById('weatherResult');
   
    if (city) {
        fetch(`http://api.weatherapi.com/v1/current.json?key=424c2767cffd4fa781360407241410&q=${city}&units=metric&appid=${apikey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Weather data not found');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                const temp = data.current.temp_c;
                let icon = "https:"+data.current.condition.icon;
                const region = data.location.region;
                const humidity = data.current.humidity;
                const wind = data.current.wind_kph
                const text = data.current.condition.text;
                const container = document.getElementById('weatherResult')

               weatherResult.innerHTML = `
               <div class="temp">
               <p>Current Temperatur : ${temp} <sup>o</sup>C</p>
               </div>
               <div class="region">
               <p>Region :${region}</p>
               </div>
               <div class = "icon">
               <img src="${icon}" height ="70" width="100" alt="Weather icon" />
               <p>${text}</p>
                </div>
                <div class ="under">
                <div class="humidity">
                <p>${humidity}</p>
              <i class='bx bx-water bx-spin' ></i>
                
              </div>
              <div class="wind">
              <p>${wind} KPH</p>
             <i class='bx bx-wind bx-spin' ></i>
             
               </div>
               </div>
               `


            })
            .catch(error => {
                weatherResult.innerHTML = `Error: ${error.message}`;
            });
    } else {
        
        weatherResult.innerHTML = 'Please select a city.';
    }
});
 


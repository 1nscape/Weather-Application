function weatherApi() {
    var weatherApiUrl = "https://api.openweathermap.org/data/3.0/onecall?&appid=e3aa746e7c535bde01009eef4a333aa2"
     fetch(weatherApiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (dataWeather) {
            console.log(dataWeather)
            
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      
  }
  
  weatherApi();
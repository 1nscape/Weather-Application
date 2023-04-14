var searchBtn = document.querySelectorById('searchBtn');
var clearBtn = document.querySelectorById('remove-search');
var tempElement = document.querySelectorById('temperature');
var humidityElement = document.querySelectorById('humidity');
var cityElement = document.querySelectorById('city');
var uvElement = document.querySelectorById('UV'); 
var windElement = document.querySelectorById('wind');
var fiveDays = document.querySelectorById('fiveDaysForecast');
var apiKey = 'e3aa746e7c535bde01009eef4a333aa2'

var container = document.querySelector('container');

function localSearch(city) {
  var previousSearchBtn = document.createElement('button');
  previousSearchBtn.setAttribute('class', 'btn btn-primary ');
  previousSearchBtn.innerText = city;

}

function populateStorage() {
  localStorage.setItem('previousSearch', JSON.stringify(previousSearch));
}

function getStorage() {
  let storage = JSON.parse(localStorage.getItem('previousSearch'))
  if (storage) {
    storage.forEach(localSearch);
  }
}




function forecastedApi (city) {
  
  forecastApi = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=imperial" + '&appid=' + apiKey;


fetch(forecastApi)
.then(function(response){
  if (response.ok) {
    return response.json();
  }
  throw response.json()
}) 
.then((fiveData) => {
  for (let index = 3; index <= fiveData.list.length; index +=9) {
    var wind = fiveData.list[i].wind.speed;
    var humidity = fiveData.list[i].main.humidity;
    var temp = fiveData.list[i].main.temp;

    windElement.textContent = 'Wind: ' + wind + ' mph';
    humidityElement.textContent = 'Humidity: ' + humidity + ' %'
    tempElement.textContent = 'Temp: ' + temp + 'F'

    container.appendChild(windElement);
    container.appendChild(humidityElement);
    container.appendChild(tempElement);

   }
}) 

}


function currentApi (city) {
  currentApi = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + '&appid=' + apiKey;

  fetch(currentApi)
  .then(function(response){
    if (response.ok) {
      return response.json();

    }
    throw response.json()
  })
  .then((currentData) => {
    
    var cityLocation = currentData.name;
    var temp = currentData.main.temp;
    var humidity = currentData.main.humidity; 
    var wind = currentData.wind.speed;

    let currentLocation = document.createElement('p');
    let currentTemp = document.createElement('p');
    let currentHumidity = document.createElement('p');
    let currentWind = document.createElement('p');

    currentLocation.textContent = cityLocation + ' '; 
    currentTemp.textContent = 'Temp ' + temp + 'F';
    currentHumidity.textContent = 'Humidity ' + humidity + ' %';
    currentWind.textContent = 'Wind ' + wind + ' mph'

  }) 

}





const API_KEY = '9a960ef52eb6c134ff3ed50341d4e861';
const COORDS = 'coords';
const weather = document.querySelector(".weather");


async function getWeater(lat, log){
  let url = new URL(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`);
  let data = await fetch(url).then((response) => response.json());
  
  let place = data.name;
  let temperature = data.main.temp;
  let iconId = data.weather[0].icon;

  let weatherHTML = `<span>${place}</span><img src="images/${iconId}.png"/><span>${temperature} ℃</span>`;
  weather.innerHTML = weatherHTML;
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
  // console.log(position.coords.latitude, position.coords.longitude);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let coordsObj = {
    latitude: latitude,
    longitude: longitude,
  };

  saveCoords(coordsObj);
  getWeater(latitude, longitude);
}

function handleGeoError(){
  console.log("Cant access geo location");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
};

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();
  }else {
    // getWeather
    const parsedCoords = JSON.parse(loadedCoords);
    getWeater(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init(){
  loadCoords();
}
init();
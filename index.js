const inputValue = document.querySelector(".inputValue");
const button = document.querySelector(".button");
const name = document.querySelector(".name");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");
const feel = document.querySelector(".feel");
const icon = document.querySelector(".icon");

const buttonFunction = () => {
  getWeather(inputValue.value);
};

let getWeather = (city) => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=a474d282851569c6ceb1214ad8bbf0d2"
  )
    .then((response) => response.json())
    .then((data) => {
      var cityData = {
        nameValue: data.name,
        tempValue: data.main.temp,
        desValue: data.weather[0].main,
        feelValue: data.main.feels_like,
        iconValue: data.weather[0].icon,
      };

      displayWeather(cityData);
    })
    // data.name , data.temp ,weather.0.main

    .catch((err) => {
      alert("Incorrect city");
    });
};

let displayWeather = (data) => {
  name.innerHTML = data.nameValue;
  icon.innerHTML = `<img src="icons/${data.iconValue}.png">`;
  temp.innerHTML = Math.round(toCelsius(data.tempValue)) + " °c";
  desc.innerHTML = data.desValue;
  feel.innerHTML =
    "Feels like " + Math.round(toCelsius(data.feelValue)) + " °c";
  console.log(data);
};

getWeather("Concordia");

button.addEventListener("click", buttonFunction);

const toCelsius = (temp) => {
  return temp - 273.15;
};

//3454323242

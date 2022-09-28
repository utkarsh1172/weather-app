const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");


const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading...</h4>`
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showWeather(data);
};

const showWeather = (data) => {
   if(data.cod == '404'){
    weather.innerHTML = `<h2>City Not Found</h4>`
   }
  weather.innerHTML = 
  `
  <div>
    <img src= "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  </div>
  <div>
    <h2> ${data.main.temp}</h2>
    <h4 style="margin-top:-10px;">${data.weather[0].main}</h4>
  </div>
`
};

form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});

// const API =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

// const IMG_URL = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png";

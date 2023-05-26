let now = new Date();
let h2 = document.querySelector("h2");

let days =
("Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday");

let day = days[now.getDay()];
let date = now.getDate();
let year = now.getFullYear();
let months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"september",
"October",
"November",
"December"
];
let month = months[now.getMonth()];

h2.innerHTML = `${day} <br> ${month} ${date}, ${year}`;

function search(event) {
event.preventDefault();
let searchInput = document.querySelector("#search-text-input");

searchCity(searchInput.value);
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", search);

function searchCity(city){
let key = "d1a86552de255334f6117b348c4519bd";
let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;

axios.get(url).then(currentWeather);
}

function currentWeather(response) {
let temp = response.data.main.temp;
let h1 = document.querySelector("span")
h1.innerHTML = `Currently ${temp}˚F`;
let iconElement = document.querySelector ("h1.icon")
iconElement.setAttribute("src",'http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png')
}

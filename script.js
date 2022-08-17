let weather = {
   apiKey: "589d47aa01dbf84cbcaa459ab007d491",
   fetchWeather: function (city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" +
    this.apiKey)

    .then((response) => response.json)
    return response.json();

    .then((data) => this.displayWeather(data));




   }
}


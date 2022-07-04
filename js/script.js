const elWeather = document.querySelector(".wrapper");
const elFrorm = document.querySelector(".weatherform");
const elInput = document.querySelector(".form");
const elWeatherWarapper = document.querySelector(".weather-wrapper");

const renderCountries = function (data){
    const html = `
    <article>
        <h4 class="weather-name">${"City : "}${data.name}</h4>
        <h5 class="weather-country">${"Country: "}${data.sys.country}</h5>
        <p class="weather-condition">${"Condition: "}${data.weather[0].main}</p>
        <p class="weather-temp">${"Temp: "}${data.main.temp}</p>
    </article>
        <img src="./images/weather.jpg" width="140" height="120">
    `;

    elWeatherWarapper.insertAdjacentHTML("beforeend",html);
}

elWeather.addEventListener("submit", function (evt){
    evt.preventDefault();

    elWeatherWarapper.innerHTML=null;
    const country = elInput.value;

    const getCountryDataWeather = async function (country){
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`);
    const data = await request.json();

    elInput.value = "";
    renderCountries(data);
    console.log(data);
};
getCountryDataWeather(country);
});

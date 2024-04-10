import { retrieveWeatherData } from "./apiHandler";
import "./styles.css";
async function displayWeatherData(locationName: string) {
  const result = await retrieveWeatherData(locationName);

  const weatherStatus = document.querySelector("#weather-status");
  const statusIcon = document.querySelector("#status-icon") as HTMLImageElement;
  const weatherContainer = document.querySelector(".weather-container");

  if (result.error) {
    console.error(`An error occurred: ${result.error}`);
    // Display error message to the user
    if (weatherStatus) {
      weatherStatus.textContent = `Error fetching weather data: ${result.error}`;
    }
  } else {
    resetContainer();
    console.log("Weather data:", result.weatherLocation);
    // Display weather data to the user
    weatherStatus.textContent = `Weather in ${result.weatherLocation.city}: ${result.weatherLocation.conditionText}`;

    weatherContainer.innerHTML = `
    <img id="status-icon" src="${result.weatherLocation.conditionIcon}" alt="display status icon" />
      <p id="weather-status">Weather in ${result.weatherLocation.city}: ${result.weatherLocation.conditionText}</p>
      <p class="country">${result.weatherLocation.country}</p>
      <p class="local-time">${result.weatherLocation.localtime}</p>
      <p class="city">${result.weatherLocation.city}</p>
      <p class="province">${result.weatherLocation.province}</p>
      <p class="feelsLikeC">${result.weatherLocation.feelsLikeC}</p>
      <p class="feelsLikeF">${result.weatherLocation.feelsLikeF}</p>
    `;
  }
}

function resetContainer() {
  const weatherContainer = document.querySelector(".weather-container");

  weatherContainer.innerHTML = `
    <img id="status-icon" src="#" alt="display status icon" />
    <p id="weather-status"></p>
    <p class="country"></p>
    <p class="local-time"></p>
    <p class="city"></p>
    <p class="province"></p>
    <p class="feelsLikeC"></p>
    <p class="feelsLikeF"></p>
  `;
}

displayWeatherData("Kitchener");

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
      alert(`Error fetching weather data: ${result.error}`);
    }
  } else {
    resetContainer();
    console.log("Weather data:", result.weatherLocation);
    // Display weather data to the user
    weatherStatus.textContent = `Weather in ${result.weatherLocation.city}: ${result.weatherLocation.conditionText}`;

    weatherContainer.innerHTML = `
    <div class="display-group1">
        <img id="status-icon" src="${result.weatherLocation.conditionIcon}" alt="display status icon" />
        <p id="weather-status">${result.weatherLocation.conditionText}</p>
    </div>
    <div class="display-group2">
      <p class="feelsLikeC">${result.weatherLocation.feelsLikeC}°C</p>
      <p class="feelsLikeF">${result.weatherLocation.feelsLikeF}°F</p>
    </div>
    <div class="display-group3">
        <p class="country">${result.weatherLocation.country}</p>
        <p class="cityProvince">${result.weatherLocation.city}, ${result.weatherLocation.province}</p>
        <p class="local-time">${result.weatherLocation.localtime}</p>
    </div>
    `;
  }
}

function resetContainer() {
  const weatherContainer = document.querySelector(".weather-container");

  weatherContainer.innerHTML = `
     <div class="display-group1">
        <img id="status-icon" src="#" alt="display status icon" />
        <p id="weather-status"></p>
      </div>
      <div class="display-group2">
        <p class="feelsLikeC"></p>
        <p class="feelsLikeF"></p>
      </div>
      <div class="display-group3">
        <p class="country"></p>
        <p class="cityProvince"></p>
        <p class="local-time"></p>

      </div>
  `;
}

displayWeatherData("Kitchener");

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

    alert(`Error fetching weather data: ${result.error}`);
  } else {
    resetContainer();
    console.log("Weather data:", result.weatherLocation);

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

    if (result.weatherLocation.isDay) {
      displayDay();
    } else if (!result.weatherLocation.isDay) {
      displayNight();
    }
  }
}

function displayDay() {
  document.body.style.backgroundColor = "var(--primary-bg-color-day)";
  document.body.style.color = "var(--primary-font-color-day)";
}
function displayNight() {
  document.body.style.backgroundColor = "var(--primary-bg-color-night)";
  document.body.style.color = "var(--primary-font-color-night)";
}
function resetContainer() {
  const weatherContainer = document.querySelector(".weather-container");

  weatherContainer.innerHTML = `
     <div class="display-group1">
        <p id="weather-status"></p>
      </div>

  `;
}

const inputLocationForm = document.querySelector("#locationInputForm");
const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", searchLocation);
inputLocationForm.addEventListener("submit", searchLocation);

function searchLocation(e: any) {
  e.preventDefault();

  const inputLocation = document.querySelector(
    ".locationInput"
  ) as HTMLInputElement;
  console.log(inputLocation.value);
  displayWeatherData(inputLocation.value);
}

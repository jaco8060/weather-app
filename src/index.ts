import { retrieveWeatherData } from "./apiHandler";
import "./styles.css";
async function displayWeatherData(locationName: string) {
  const result = await retrieveWeatherData(locationName);

  const weatherStatus = document.querySelector("#weather-status");
  const statusIcon = document.querySelector("#status-icon") as HTMLImageElement;

  if (result.error) {
    console.error(`An error occurred: ${result.error}`);
    // Display error message to the user
    if (weatherStatus) {
      weatherStatus.textContent = `Error fetching weather data: ${result.error}`;
    }
  } else {
    console.log("Weather data:", result.weatherLocation);
    // Display weather data to the user
    weatherStatus.textContent = `Weather in ${result.weatherLocation.city}: ${result.weatherLocation.conditionText}`;
    // show appropriate weather icon
    statusIcon.src = result.weatherLocation.conditionIcon;
  }
}

displayWeatherData("Kitchener");

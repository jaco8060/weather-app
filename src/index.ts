import { retrieveWeatherData } from "./apiHandler";
import "./styles.css";
async function displayWeatherData(locationName: string) {
  const result = await retrieveWeatherData(locationName);

  if (result.error) {
    console.error(`An error occurred: ${result.error}`);
    // Display error message to the user
    document.querySelector(
      "#weather-status"
    ).textContent = `Error fetching weather data: ${result.error}`;
  } else {
    console.log("Weather data:", result.weatherLocation);
    // Display weather data to the user
    document.querySelector(
      "#weather-status"
    ).textContent = `Weather in ${result.weatherLocation.city}: ${result.weatherLocation.conditionText}`;
  }
}

displayWeatherData("Kitchener");

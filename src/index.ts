import { retrieveWeatherData } from "./apiHandler";

async function displayWeatherData(locationName) {
  const result = await retrieveWeatherData(locationName);

  if (result.error) {
    console.error(`An error occurred: ${result.error}`);
    // Display error message to the user, for example:
    document.querySelector(
      "#weather-status"
    ).textContent = `Error fetching weather data: ${result.error}`;
  } else {
    console.log("Weather data:", result.weatherLocation);
    // Display weather data to the user, for example:
    document.querySelector(
      "#weather-status"
    ).textContent = `Weather in ${result.weatherLocation.city}: ${result.weatherLocation.conditionText}`;
  }
}

// Usage example
displayWeatherData("Kitchener");

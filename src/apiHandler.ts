import { LocationWeather } from "./location";

async function retrieveWeatherData(locationName: string) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=d0d34e3ac0624eecb36215539240804&q=${locationName}`,
      { mode: "cors" }
    );
    // changed to https for security
    if (!response.ok) {
      const errorData = await response.json();
      // Return an object with status and error message
      return {
        status: response.status,
        error: `Error ${response.status}: ${errorData.error.message}`,
      };
    }

    const responseData = await response.json();

    const weatherLocation = new LocationWeather(
      responseData.location.country,
      responseData.location.localtime,
      responseData.location.name,
      responseData.location.region,
      responseData.current.condition.text,
      responseData.current.condition.icon,
      responseData.current.feelslike_c,
      responseData.current.feelslike_f,
      responseData.current.is_day
    );

    // If successful, return the weather location with a 200 status code
    return {
      status: 200,
      weatherLocation,
    };
  } catch (error) {
    // Handle unexpected errors, returning a status code with the error
    console.log(`Failed to retrieve weather data: ${error.message}`);
    return {
      status: 400, // Internal Server Error or appropriate status based on the context
      error: `Failed to retrieve weather data: ${error.message}`,
    };
  }
}

export { retrieveWeatherData };

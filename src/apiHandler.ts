async function retrieveWeatherData() {
  const cityName = "312372189371237"; // Example city name, likely to cause an error

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=d0d34e3ac0624eecb36215539240804&q=${cityName}`,
      { mode: "cors" }
    );

    if (!response.ok) {
      // Check if the response status is not OK (200-299)
      const errorData = await response.json(); // Assuming the API sends JSON-formatted error messages
      throw new Error(`Error ${response.status}: ${errorData.error.message}`);
    }

    // If the response is ok, parse and log the JSON data
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    // Log custom error message or process further as needed
    console.log(`Failed to retrieve weather data: ${error.message}`);
  }
}

export { retrieveWeatherData };

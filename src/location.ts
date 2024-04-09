class LocationWeather {
  constructor(
    public country: string,
    public localtime: string,
    public city: string,
    public province: string,
    public conditionText: string,
    public conditionIcon: string,
    public feelsLikeC: number,
    public feelsLikeF: number,
    isDayNumber: number // Use a parameter to take the numeric value
  ) {
    this.isDay = isDayNumber === 1; // Convert to boolean and assign to public property
  }

  public isDay: boolean; // Declare the boolean property outside the constructor
}

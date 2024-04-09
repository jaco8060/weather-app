import { retrieveWeatherData } from "./apiHandler";
import "./styles.css";
const h1element = document.querySelector("h1");

retrieveWeatherData("kitchener");
h1element.textContent = "hello123";

import { retrieveWeatherData } from "./apiHandler";
import "./styles.css";
const h1element = document.querySelector("h1");

retrieveWeatherData();
h1element.textContent = "hello123";

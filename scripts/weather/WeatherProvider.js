// fetches from the API 
// slices the array of weather 

// AUDREY 
import {keys} from "./Settings.js";

let weather = [];
const weatherKey = keys.weatherKey;

export const getWeather = (zipCode) => {
    return fetch(`"https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=${weatherKey}"`)
    .then(respnse => response.json())
    .then(parsedResponse => {
        weather = parsedResponse;
    })
}

export const useWeather = () => {
    return weather.slice();
}
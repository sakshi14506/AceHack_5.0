import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

export const getWeather = async (city) => {
  try {

    const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=yes`;

    const response = await fetch(url);
    const data = await response.json();

    return {
      city: data.location.name,
      country: data.location.country,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      humidity: data.current.humidity,
      wind: data.current.wind_kph
    };

  } catch (error) {

    console.error("Weather API Error:", error);
    return null;

  }
};
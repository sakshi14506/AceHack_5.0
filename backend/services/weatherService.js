import axios from "axios";

export const getWeather = async (destination) => {

  try {

    const response = await axios.get(
      "http://api.weatherapi.com/v1/current.json",
      {
        params: {
          key: process.env.WEATHER_API_KEY,
          q: destination
        }
      }
    );

    return {
      temperature: response.data.current.temp_c,
      condition: response.data.current.condition.text,
      icon: response.data.current.condition.icon
    };

  } catch (error) {

    console.log("Weather API error:", error.message);

    return null;

  }

};
import { useEffect, useState } from "react";

export default function WeatherCard({ destination }) {

  const [weather, setWeather] = useState(null);

  useEffect(() => {

    const fetchWeather = async () => {

      try {

        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.20&current_weather=true`
        );

        const data = await res.json();

        setWeather(data.current_weather);

      } catch (err) {

        console.log(err);

      }

    };

    fetchWeather();

  }, [destination]);

  if (!weather) return <p>Loading weather...</p>;

  return (

    <div className="bg-white p-6 rounded-xl shadow text-center">

      <h3 className="font-bold mb-2">
        Weather
      </h3>

      <p>
        🌡 {weather.temperature}°C
      </p>

      <p>
        Wind: {weather.windspeed} km/h
      </p>

    </div>

  );
}
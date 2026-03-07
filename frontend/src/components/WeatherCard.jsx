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

  if (!weather) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mb-2"></div>
        <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex items-center gap-8">
      <div className="text-5xl">
        {weather.temperature > 30 ? "☀️" : weather.temperature > 15 ? "🌤" : "❄️"}
      </div>
      <div>
        <h3 className="font-bold text-lg text-gray-900 mb-1">
          Weather in {destination}
        </h3>
        <p className="text-3xl font-bold text-gray-900">
          {weather.temperature}°C
        </p>
        <p className="text-gray-400 text-sm mt-1">
          Wind: {weather.windspeed} km/h
        </p>
      </div>
    </div>
  );
}
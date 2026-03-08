import { useEffect, useState } from "react";

export default function WeatherOutfit({ destination }) {

  const [weather, setWeather] = useState("mild");

  useEffect(() => {

    const coldPlaces = ["Manali", "Shimla", "Leh", "Kashmir"];
    const hotPlaces = ["Goa", "Dubai", "Bali", "Thailand"];

    if (coldPlaces.includes(destination)) {
      setWeather("cold");
    } else if (hotPlaces.includes(destination)) {
      setWeather("hot");
    } else {
      setWeather("mild");
    }

  }, [destination]);

  const outfits = {

    cold: [
      {
        name: "Winter Jacket",
        icon: "🧥",
        img: "https://images.unsplash.com/photo-1542060748-10c28b62716f"
      },
      {
        name: "Boots",
        icon: "🥾",
        img: "https://images.unsplash.com/photo-1528701800489-20be3c7a2e4d"
      },
      {
        name: "Scarf",
        icon: "🧣",
        img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
      }
    ],

    hot: [
      {
        name: "T-Shirt",
        icon: "👕",
        img: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
      },
      {
        name: "Shorts",
        icon: "🩳",
        img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7"
      },
      {
        name: "Sunglasses",
        icon: "🕶️",
        img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
      }
    ],

    mild: [
      {
        name: "Light Jacket",
        icon: "🧥",
        img: "https://images.unsplash.com/photo-1520974735194-0c4c8c60e0fa"
      },
      {
        name: "Jeans",
        icon: "👖",
        img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
      },
      {
        name: "Sneakers",
        icon: "👟",
        img: "https://images.unsplash.com/photo-1519741497674-611481863552"
      }
    ]
  };

  const weatherLabel = {
    cold: "❄️ Cold Weather",
    hot: "☀️ Hot Weather",
    mild: "🌤 Mild Weather"
  };

  return (

    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-6">

      <h2 className="text-lg font-semibold text-white mb-1">
        👕 Outfit Suggestions
      </h2>

      <p className="text-sm text-white/70 mb-4">
        {weatherLabel[weather]} in {destination}
      </p>

      <div className="grid grid-cols-3 gap-4">

        {outfits[weather].map((item, i) => (

          <div
            key={i}
            className="bg-white/10 rounded-xl p-3 text-center hover:scale-105 transition cursor-pointer"
          >

            <img
              src={item.img}
              alt={item.name}
              className="h-20 w-full object-cover rounded-lg"
            />

            <p className="mt-2 text-sm text-white">
              {item.icon} {item.name}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}
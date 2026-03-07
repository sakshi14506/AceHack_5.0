export default function TripStory({ destination }) {
  const stories = {
    Goa: "Sunsets, beaches and salty air. Goa is where every moment feels like freedom — where the ocean whispers tales of adventure and the golden horizon paints your memories in warmth. 🌅",
    Paris: "Paris whispers romance in every cobblestone street, every candlelit cafe, and every sunset that gilds the Seine. It's not just a city — it's a feeling that stays with you forever. 🗼",
    Bali: "Bali blends spirituality, nature, and adventure into a magical escape. From terraced rice fields to volcanic sunrises, every moment here is a meditation on beauty. 🌴",
    Dubai: "Dubai dazzles with its futuristic skyline and endless luxury. From desert safaris under starlit skies to soaring above the clouds at the Burj Khalifa — it's a city of dreams. ✨",
    Manali: "Manali enchants with snow-capped peaks, pine forests, and the crisp mountain air. Every trail leads to a breathtaking view that takes your worries away. 🏔"
  };

  const story = stories[destination] ||
    "This journey is about discovering new places and creating unforgettable memories. Every destination holds a story waiting to be lived — and this one is yours. ✨";

  return (
    <div className="prose">
      <p className="text-gray-600 leading-relaxed text-lg italic">"{story}"</p>
    </div>
  );
}
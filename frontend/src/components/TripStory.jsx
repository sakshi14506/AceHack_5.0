import { useEffect, useState } from "react";

function TripStory({ destination }) {

  const [story, setStory] = useState("");

  useEffect(() => {

    const stories = [

      `Your journey to ${destination} begins with excitement in the air. As you arrive, vibrant streets and local culture welcome you.`,

      `In ${destination}, every corner has a story waiting to be discovered. From scenic views to local markets, the adventure unfolds.`,

      `Imagine waking up in ${destination} with endless exploration ahead. Cafes, landscapes and unforgettable memories await.`

    ];

    const randomStory =
      stories[Math.floor(Math.random() * stories.length)];

    setStory(randomStory);

  }, [destination]);

  return (

    <div className="mt-12 p-6 bg-white rounded-2xl shadow-md">

      <h2 className="text-2xl font-semibold mb-4">
        Your Travel Story ✨
      </h2>

      <p className="text-gray-700 leading-relaxed">
        {story}
      </p>

    </div>

  );

}

export default TripStory;
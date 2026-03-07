import { motion } from "framer-motion";

export default function TripStory({ destination, mood }) {

  const story = `
Your journey to ${destination} begins with excitement.
This ${mood} trip will take you through beautiful views,
local food, and unforgettable moments.

Safarnama believes every trip is a story waiting to be told.
`;

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-8 rounded-xl shadow mt-12"
    >

      <h2 className="text-2xl font-bold mb-4">
        Your Travel Story
      </h2>

      <p className="text-gray-700 leading-relaxed">
        {story}
      </p>

    </motion.div>
  );
}
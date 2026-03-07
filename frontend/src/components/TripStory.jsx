import { motion } from "framer-motion";

export default function TripStory({ destination, mood }) {

  const story = `
Your journey to ${destination} begins with excitement in the air.
The vibe of the trip is ${mood}, so expect beautiful moments,
local food discoveries, and unforgettable experiences.

Day 1 welcomes you with stunning views and cultural exploration.
Day 2 is about diving deeper into the local lifestyle and hidden gems.
Day 3 wraps up the adventure with memories that stay forever.

Safarnama believes every journey is a story waiting to be told.
`;

  return (

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-2xl shadow-lg mt-12"
    >

      <h2 className="text-2xl font-bold mb-4">
        ✨ Your Travel Story
      </h2>

      <p className="text-gray-700 leading-relaxed">
        {story}
      </p>

    </motion.div>
  );
}
import { motion } from "framer-motion";

export default function ItineraryTimeline({ itinerary }) {

  return (

    <div className="space-y-6">

      {itinerary.map((item, i) => (

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >

          <h3 className="font-bold text-lg">
            {item.day} — {item.title}
          </h3>

          <p className="text-gray-600 mt-2">
            {item.desc}
          </p>

        </motion.div>

      ))}

    </div>

  );
}
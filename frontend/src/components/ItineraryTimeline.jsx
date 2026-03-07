import { motion } from "framer-motion";

export default function ItineraryTimeline({ itinerary }) {

  return (

    <div className="relative border-l-2 border-blue-500 ml-4">

      {itinerary.map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="mb-10 ml-6"
        >

          <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-8 ring-white"></span>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

            <h3 className="font-bold text-lg mb-2">
              {item.day}
            </h3>

            <p className="font-medium text-gray-800">
              {item.title}
            </p>

            <p className="text-gray-600 text-sm mt-2">
              {item.desc}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  );
}
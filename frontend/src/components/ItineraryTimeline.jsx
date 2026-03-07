import { motion } from "framer-motion";

export default function ItineraryTimeline({ itinerary }) {
  return (
    <div className="space-y-5">
      {itinerary.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.15 }}
          className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 flex gap-5 items-start"
        >
          <div className="min-w-[60px] h-[60px] bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20">
            {item.day}
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-500 mt-1 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
import { motion } from "framer-motion";

const destinations = [
  {
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
  },
  {
    name: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a"
  },
  {
    name: "Manali",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
  }
];

export default function Explore() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          Explore Destinations
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {destinations.map((place, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow overflow-hidden cursor-pointer"
            >

              <img
                src={place.image}
                className="h-56 w-full object-cover"
              />

              <div className="p-4">

                <h2 className="text-xl font-semibold">
                  {place.name}
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Discover amazing experiences
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </div>
  );
}
export default function ShareCard({ destination }) {

  return (

    <div className="bg-blue-600 text-white rounded-xl p-8 mt-10 text-center">

      <h2 className="text-2xl font-bold mb-3">
        Share Your Trip ✈️
      </h2>

      <p className="mb-5">
        Let your friends explore your {destination} journey.
      </p>

      <button className="bg-white text-blue-600 px-6 py-3 rounded-full">
        Share Safarnama Story
      </button>

    </div>

  );
}
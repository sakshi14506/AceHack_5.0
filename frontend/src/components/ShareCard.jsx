import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import { useRef } from "react";

export default function ShareCard({ destination }) {
  const ref = useRef();

  const downloadCard = async () => {
    const dataUrl = await toPng(ref.current);
    saveAs(dataUrl, "safarnama-trip.png");
  };

  return (
    <div>
      <div
        ref={ref}
        className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-2xl text-white shadow-lg"
      >
        <div className="text-sm opacity-70 mb-2">Safarnama ✈️</div>
        <h2 className="text-2xl font-bold">
          My {destination} Trip
        </h2>
        <p className="mt-2 opacity-80">
          Planned with AI — An unforgettable journey awaits ✨
        </p>
      </div>

      <button
        onClick={downloadCard}
        className="mt-4 bg-white text-gray-900 border border-gray-200 px-6 py-2.5 rounded-xl font-medium text-sm hover:shadow-md hover:border-gray-300 transition-all duration-300"
      >
        📥 Download Trip Card
      </button>
    </div>
  );
}
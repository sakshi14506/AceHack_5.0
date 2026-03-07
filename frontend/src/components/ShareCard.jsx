import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import { useRef } from "react";

export default function ShareCard({destination}){

 const ref = useRef();

 const downloadCard = async () => {

  const dataUrl = await toPng(ref.current);
  saveAs(dataUrl,"safarnama-trip.png");

 };

 return(

  <div>

   <div
    ref={ref}
    className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-xl text-white"
   >

    <h2 className="text-2xl font-bold">
     My {destination} Trip
    </h2>

    <p>
     Planned with Safarnama AI ✨
    </p>

   </div>

   <button
    onClick={downloadCard}
    className="mt-4 bg-white text-black px-4 py-2 rounded-lg"
   >
    Download Trip Card
   </button>

  </div>

 );

}
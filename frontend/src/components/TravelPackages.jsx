const packages = [
  {
    place: "Dubai",
    price: "₹45,000",
    days: "5 Days"
  },
  {
    place: "Bali",
    price: "₹52,000",
    days: "6 Days"
  },
  {
    place: "Thailand",
    price: "₹38,000",
    days: "4 Days"
  }
];

function TravelPackages(){

  return(

    <div className="mt-16">

      <h2 className="text-2xl font-bold mb-6">
        💰 Popular Travel Packages
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {packages.map((p,i)=>(

          <div key={i} className="bg-white shadow-lg rounded-xl p-6">

            <h3 className="text-xl font-semibold">
              {p.place}
            </h3>

            <p className="text-gray-500">
              {p.days}
            </p>

            <p className="text-blue-600 font-bold mt-2">
              {p.price}
            </p>

            <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
              View Trip
            </button>

          </div>

        ))}

      </div>

    </div>

  )
}

export default TravelPackages
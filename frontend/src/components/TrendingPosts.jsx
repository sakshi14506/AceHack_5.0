const posts = [
  {
    user: "TravelWithAditi",
    place: "Goa",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    user: "BackpackRohit",
    place: "Manali",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    user: "NomadSneha",
    place: "Thailand",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
];

function TrendingPosts() {

  return (
    <div className="mt-16">

      <h2 className="text-2xl font-bold mb-6">
        🔥 Trending Travel Stories
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {posts.map((p,i)=>(
          <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">

            <img
              src={p.image}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">

              <p className="font-semibold">@{p.user}</p>
              <p className="text-gray-500 text-sm">
                Exploring {p.place}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default TrendingPosts;
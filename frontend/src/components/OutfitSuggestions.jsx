export default function OutfitSuggestions({ mood }) {

  const outfits = {

    relax: [
      {
        name: "Casual T-Shirt",
        img: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
      },
      {
        name: "Comfort Shorts",
        img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7"
      },
      {
        name: "Flip Flops",
        img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
      }
    ],

    adventure: [
      {
        name: "Hiking Jacket",
        img: "https://images.unsplash.com/photo-1542060748-10c28b62716f"
      },
      {
        name: "Cargo Pants",
        img: "https://images.unsplash.com/photo-1520974735194-0c4c8c60e0fa"
      },
      {
        name: "Trekking Shoes",
        img: "https://images.unsplash.com/photo-1519741497674-611481863552"
      }
    ],

    party: [
      {
        name: "Stylish Shirt",
        img: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
      },
      {
        name: "Denim Jeans",
        img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
      },
      {
        name: "Sneakers",
        img: "https://images.unsplash.com/photo-1519741497674-611481863552"
      }
    ]

  };

  const items = outfits[mood] || outfits.relax;

  return (

    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">

      <h3 className="text-lg font-semibold mb-4 text-white">
        Outfit Suggestions 👕
      </h3>

      <div className="grid grid-cols-3 gap-4">

        {items.map((item, i) => (

          <div
            key={i}
            className="bg-white/10 rounded-xl p-2 text-center hover:scale-105 transition"
          >

            <img
              src={item.img}
              alt={item.name}
              className="h-20 w-full object-cover rounded-lg"
            />

            <p className="text-sm text-white mt-2">
              {item.name}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}
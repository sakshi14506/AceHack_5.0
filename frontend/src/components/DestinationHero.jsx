const DestinationHero = ({ destination }) => {

  // F8: Using a reliable Unsplash image URL instead of deprecated source.unsplash.com
  const images = {
    default: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
    mountain: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
    city: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2070&auto=format&fit=crop"
  };

  const image = images.default;

  return (

    <div
      className="h-[60vh] bg-cover bg-center flex items-end relative"
      style={{ backgroundImage: `url(${image})` }}
    >

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

      <div className="relative p-10">
        <h1 className="text-white text-5xl font-bold drop-shadow-lg">
          {destination}
        </h1>
        <p className="text-white/80 text-lg mt-2">
          Your personalized travel experience
        </p>
      </div>

    </div>

  );

};

export default DestinationHero;
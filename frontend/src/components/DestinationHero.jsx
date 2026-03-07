const DestinationHero = ({ destination }) => {

  const image =
    `https://source.unsplash.com/1600x900/?${destination},travel`;

  return (

    <div
      className="h-[60vh] bg-cover bg-center flex items-end"
      style={{ backgroundImage: `url(${image})` }}
    >

      <h1 className="text-white text-5xl font-bold p-10">
        {destination}
      </h1>

    </div>

  );

};

export default DestinationHero;
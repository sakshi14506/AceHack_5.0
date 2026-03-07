const generateTrip = async (req, res) => {

  try {

    const { destination, mood } = req.body;

    const trip = {
      destination,
      mood,
      weather: {
        temperature: 27,
        condition: "Sunny"
      },
      story: `Your ${mood} journey to ${destination} begins with vibrant streets, local culture and unforgettable memories.`,
      itinerary: [
        {
          day: 1,
          activities: [
            "Explore local markets",
            "Visit famous landmark",
            "Try local food"
          ]
        },
        {
          day: 2,
          activities: [
            "Visit museums",
            "Explore historical sites",
            "Evening city walk"
          ]
        },
        {
          day: 3,
          activities: [
            "Sunrise viewpoint",
            "Local shopping",
            "Cultural performance"
          ]
        }
      ]
    };

    res.json(trip);

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: "Failed to generate trip" });

  }

};

export default generateTrip;
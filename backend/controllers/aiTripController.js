import axios from "axios";
import { getWeather } from "../services/weatherService.js";
import { getNearbyPlaces } from "../services/placesService.js";

export const generateTrip = async (req, res) => {

  const { destination, mood, days } = req.body;

  try {

    const weather = await getWeather(destination);

    const places = await getNearbyPlaces(destination);

    const prompt = `
Create a travel plan for ${destination}.

Mood: ${mood}
Days: ${days}

Return JSON format:

{
"story":"short travel story",
"itinerary":[
{"day":1,"plan":"activities"},
{"day":2,"plan":"activities"}
]
}
`;

    const aiResponse = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: prompt }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    const aiText = aiResponse.data.choices[0].message.content;

    res.json({
      destination,
      mood,
      days,
      weather,
      places,
      story: aiText
    });

  } catch (error) {

    console.error("Trip generation error:", error.message);

    res.status(500).json({
      error: "Trip generation failed"
    });

  }

};
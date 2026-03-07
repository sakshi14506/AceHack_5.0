import openai from "../config/openai.js";
import { getWeather } from "../services/weatherService.js";

export const generateTrip = async (req, res) => {
  try {

    const { destination, mood } = req.body;

    const weather = await getWeather(destination);

    const prompt = `
Create a 3 day travel itinerary.

Destination: ${destination}
Traveler mood: ${mood}

Weather:
Temperature: ${weather?.temperature}°C
Condition: ${weather?.condition}

Return JSON format:

{
 "itinerary":[
  {
   "day":1,
   "title":"",
   "activities":[]
  },
  {
   "day":2,
   "title":"",
   "activities":[]
  },
  {
   "day":3,
   "title":"",
   "activities":[]
  }
 ],
 "story":"cinematic travel story"
}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a travel planner AI." },
        { role: "user", content: prompt }
      ]
    });

    const aiResponse = completion.choices[0].message.content;

    res.json({
      success: true,
      weather,
      trip: aiResponse
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Trip generation failed"
    });

  }
};
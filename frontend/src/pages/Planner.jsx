import axios from "axios";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const generateTrip = async () => {

  try {

    const response = await axios.post(
      "http://localhost:5001/api/generate-trip",
      {
        destination,
        mood,
        days
      }
    );

    navigate("/results", {
      state: response.data
    });

  } catch (error) {

    console.error(error);

    alert("Error generating trip");

  }

};
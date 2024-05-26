import axios from "axios";

const apiKey = "YOUR_API_KEY";
const leagueId = "71";

const getFixtures = async () => {
  try {
    const response = await axios.get(
      `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${leagueId}`,
      {
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        },
      }
    );
    console.log(response.data.api.fixtures);
  } catch (error) {
    console.error("Error fetching the fixtures:", error);
  }
};

getFixtures();

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 8080;

app.use(cors({
    origin: "*"
}));

app.get("/api/:city", (req, res) => {
    const city = req.params.city;
    const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) {
        console.error("Error: WEATHER_API_KEY is not defined in environment variables.");
        return res.status(500).json({ error: "Internal server error" });
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            res.json(data);
            console.log("Weather data fetched successfully:", data);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            res.status(500).json({ error: "Internal server error" });
        });
})

app.listen(port, () => {
    console.log("Loaded API Key:", process.env.WEATHER_API_KEY);
    console.log(`Server started on port ${port}`);
});


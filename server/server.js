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
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            if (data && data.main && data.main.temp) {
                const temperature = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
                res.json({ data: `${temperature} °C` });
            } else {
                res.status(404).json({ error: "City not found" });
            }
        })
        .catch(error => {
            console.error("Error fetching city data:", error);
            res.status(500).json({ error: "Internal server error" });
        });

});

app.listen(port, () => {console.log(`Server started on port ${port}`);});


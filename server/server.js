import express from "express";
import fetchCityData from "./WeatherAPI.js"
const app = express();
const port = 8080;

app.get("/:city", (req, res)=>{
    const city = req.params.city
    const cityObject = fetchCityData(city)
    res.json(`${cityObject}`)
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})


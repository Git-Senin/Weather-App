import express from "express";
import cors from "cors"
import fetchCityData from "./WeatherAPI.js"
const app = express();
const port = 8080;

app.use(cors({
        origin: "*"
    }
));

app.get("/:city", (req, res)=>{
    const city = req.params.city
    const cityObject = fetchCityData(city)
    console.log(cityObject)
    res.json(`${cityObject}`)
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})


import dotenv from "dotenv";
dotenv.config()

export default async function fetchCityData(cityName){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}`)
        .then(res => res.json());
    console.log(data);
    return data;
}

export default async function fetchCityData(cityName){
    console.log(process.env.WEATHER_API_KEY);
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}`)
    .then(res => res.json());
    return data;
}


export default async function fetchCityData(cityName){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${import.meta.env.VITE_API_KEY}`)
    .then(res => res.json());
    console.log(data);
    return data;
}


export default async function fetchCityData(city) {
    const data = await fetch(`http://localhost:8080/${city}`)
    return data;
}
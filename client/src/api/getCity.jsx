export default async function getCityData(city) {
    const data = await fetch(`http://localhost:8080/${city}`)
        .then(res => res.json())
    console.log(data);
    return data;
}
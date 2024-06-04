import { useState, useEffect } from "react";
import { LocationProvider, useLocation } from "./LocationContext.jsx"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Weather from "./components/Weather/Weather.jsx"
import fetchCityData from "./WeatherAPI.jsx"
import "./index.scss"

export default function App() {
  const city = useLocation();
  const [cityData, setCityData] = useState({});

  useEffect(()=>{
    console.log(`Fetching location of ${city}`)

    const fetchData = async () => {
      try {
        const data = await fetchCityData(city)
        setCityData(data);
      } catch (error) {
        console.error("Error fetching city data:", error)
      }
    }
    
    fetchData();
  }, [city])

  return(
    <div className="wrapper">
      <Header data={cityData}/>
      <Weather data={cityData}/>
      <Footer />
    </div>
  )  
}

import styles from "./Weather.module.scss"
import Temperature from "../../util/Temperature.jsx";

export default function Weather(prop) {
    const fahrenheit = new Temperature(prop.data?.main?.temp).kelvinToFahrenheit().formatTemperature();
    const celsius = new Temperature(prop.data?.main?.temp).kelvinToCelsius().formatTemperature();
    const kelvin = new Temperature(prop.data?.main?.temp).formatTemperature();

    return(
        <section className={styles.Weather}>
            <img className={styles.Weather__img} src="https://cdn.iconscout.com/icon/free/png-256/free-weather-191-461610.png?f=webp" alt="weather-icon"/>
            <h2 className={styles.Weather__location}>{prop.data.name || "A City"}</h2>
            <p className={styles.Weather__report}>
                <div>{fahrenheit}</div>
                <div>{celsius}</div>
                <div>{kelvin}</div>
            </p>
        </section>
    )
}
import styles from "./Weather.module.css"

const Weather = (props) => {
    return(
        <div className={styles.Weather}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-weather-191-461610.png?f=webp" alt="weather-icon"/>
            <h2>{props.location}</h2>
            <p>Rain {props.rain}° • Day {props.day}° • Night {props.night}°</p>
        </div>
    );
}

export default Weather
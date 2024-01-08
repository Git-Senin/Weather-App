import styles from "./Weather.module.css"
import PropTypes from "prop-types"

const Weather = (props) => {
    return(
        <section className={styles.Weather}>
            <img className={styles.Weather__img} src="https://cdn.iconscout.com/icon/free/png-256/free-weather-191-461610.png?f=webp" alt="weather-icon"/>
            <h2>{props.location}</h2>
            <p>Rain {props.rain}° • Day {props.day}° • Night {props.night}°</p>
        </section>
    );
}
Weather.propTypes = {
    location: PropTypes.string,
    rain: PropTypes.number,
    day: PropTypes.number,
    night: PropTypes.number
}

export default Weather
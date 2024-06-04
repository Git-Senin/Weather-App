import styles from "./Weather.module.scss"

export default function Weather(prop) {

    return(
        <section className={styles.Weather}>
            <img className={styles.Weather__img} src="https://cdn.iconscout.com/icon/free/png-256/free-weather-191-461610.png?f=webp" alt="weather-icon"/>
            <h2 className={styles.Weather__location}>{prop.data.name}</h2>
            <p className={styles.Weather__report}>Rain ° • Day ° • Night °</p>
        </section>
    );
}

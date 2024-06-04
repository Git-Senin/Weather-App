import Card from "../Card/Card";
import styles from "./Footer.module.scss"

export default function Footer() {
    return(
        <footer className={styles.Footer}>
            <p>&copy; {new Date().getFullYear()} Weather</p>
            <Card link="https://github.com/Git-Senin" img="../../assets/Octicons-mark-github.svg" alt="github"/>
        </footer >
    );
}
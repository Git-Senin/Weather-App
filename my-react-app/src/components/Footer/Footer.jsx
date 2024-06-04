import styles from "./Footer.module.scss"

export default function Footer() {
    return(
        <footer className={styles.Footer}>
            <p>&copy; {new Date().getFullYear()} Weather</p>
        </footer>
    );
}
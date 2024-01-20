import styles from "./Footer.module.scss"

function Footer() {
    return(
        <footer className={styles.Footer}>
            <p>&copy; {new Date().getFullYear()} Weather</p>
        </footer>
    );
}

export default Footer
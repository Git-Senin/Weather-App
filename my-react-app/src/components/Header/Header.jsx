import styles from "./Header.module.css"

const Header = () => {
    return(
        <header className={styles.Header}>
            <h1>
                The Weather in <input className={styles.Header__input}type="text" placeholder="Location..." /> is, <span>Location</span>
            </h1>
        </header>
    )
}

export default Header
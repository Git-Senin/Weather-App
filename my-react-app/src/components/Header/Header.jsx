import styles from "./Header.module.css"

const Header = () => {
    return(
        <header className={styles.Header }>
            <h1>
                The Weather in <span><input type="text" placeholder="Location..." /></span> is,
            </h1>
        </header>
    )
}

export default Header
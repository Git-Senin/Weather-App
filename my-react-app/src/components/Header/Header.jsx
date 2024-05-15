import styles from "./Header.module.scss"
import {useState} from "react";

function Header() {

    const [location, setLocation] = useState("location");
    
    function handleLocationChange(e) {
        setLocation(e.target.value);
    }

    return(
        <header className={styles.Header}>
            <h1>
                The Weather in 
                <input 
                    className={styles.Header__input} 
                    onChange={handleLocationChange}
                />
                 is... <span>{location || "location"}</span>
            </h1>
        </header>
    )
}

export default Header
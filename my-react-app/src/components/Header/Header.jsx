import styles from "./Header.module.scss"
import {useEffect, useRef, useState} from "react";

function Header() {

    const [location, setLocation] = useState("");
    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.style.width = `${200 + (inputRef.current.value.length*20)}px`
    }, [location])

    return(
        <header className={styles.Header}>
            <h1>
                The Weather in 
                <input 
                    className={styles.Header__input} 
                    onChange={e => setLocation(e.target.value)}
                    ref={inputRef}
                />
                 is <span>{location || "sunny"}</span>
            </h1>
        </header>
    )
}

export default Header
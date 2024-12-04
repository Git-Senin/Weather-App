import { useEffect, useRef, useState} from "react";
import { useLocationUpdate } from "../../hooks/LocationContext";
import Temperature from '../../util/Temperature.jsx';
import styles from "./Header.module.scss"

export default function Header(prop) {
    const updateLocation = useLocationUpdate();
    const [input, setInput] = useState("Los Angeles");
    const inputRef = useRef(null);
    const temp = new Temperature(prop.data?.main?.temp).kelvinToFahrenheit().formatTemperature(); 

    useEffect(() => {
        // Set input size
        inputRef.current.style.width = `${25 + (inputRef.current.value.length*25)}px`;
    }, [input])

    return(
        <header className={styles.Header}>
            <h1>
                The Temperature in 
                <input 
                    id="city-input"
                    value={input}
                    className={styles.Header__input}
                    ref={inputRef}
                    onChange={e => {
                            setInput(e.target.value)
                        }
                    }
                />
                 is <span>{temp || " . . ."}</span>
            </h1>
        </header>
    )
}
